import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FlatList,
  NativeBaseProvider,
  ScrollView,
  useLayout,
} from "native-base";
import { useEffect, useState } from "react";

import moment from "moment";
import { Reservation } from "../types/reservation";
import ReservationItem from "../components/ReservationItem";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const Tab = createMaterialTopTabNavigator();

const ReservationComponent = ({ route: { params } }: any) => {
  const [_reservations, _setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  console.log({ isLoading });
  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const {
          data: { content },
        } = await axios.get(
          `http://146.59.83.238:8086/get_objects_test?page=0&select_${index}=${params.city}&select_2=${params.country}`,
        );
        _setReservations([..._reservations, ...content]);
      })();
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, []);

  const loadAdditionalReservation = () => {
    try {
      (async () => {
        const {
          data: { content },
        } = await axios.get(
          `http://146.59.83.238:8086/get_objects_test?page=0&select_${index}=${params.city}&select_2=${params.country}`,
        );
        _setReservations([..._reservations, ...content]);
        setIndex(index + 1);
      })();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NativeBaseProvider>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={loadAdditionalReservation}
          contentContainerStyle={{ paddingBottom: index > 5 ? 0 : 500 }}
          data={_reservations}
          renderItem={({ item }) =>
            item.isDate ? (
              <Text style={styles.date}>
                {moment(Date.parse(item.date)).format("dddd")}{" "}
                {moment(Date.parse(item.date)).format("ll")}
              </Text>
            ) : (
              <ReservationItem {...item} />
            )
          }
        />
      )}
    </NativeBaseProvider>
  );
};

const Incoming = (props: any) => <ReservationComponent {...props} />;

const History = (props: any) => <ReservationComponent {...props} />;

const Removed = (props: any) => <ReservationComponent {...props} />;

const Reservations = ({ route: { params } }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                style={{ paddingRight: 5 }}
                name="history"
                size={20}
              />
              <Text>Historia</Text>
            </View>
          ),
        }}
        name="History"
        initialParams={params}
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                style={{ paddingRight: 5 }}
                name="archive"
                size={20}
              />
              <Text>Usunięte</Text>
            </View>
          ),
        }}
        initialParams={params}
        name="Removed"
        component={Removed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                style={{ paddingRight: 5 }}
                name="lock-clock"
                size={20}
              />
              <Text>Nadchodzące</Text>
            </View>
          ),
        }}
        name="Incoming"
        initialParams={params}
        component={Incoming}
      />
    </Tab.Navigator>
  );
};
export default Reservations;

const styles = StyleSheet.create({
  date: {
    fontWeight: "bold",
    padding: 10,
  },
});

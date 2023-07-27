import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList, NativeBaseProvider, ScrollView } from "native-base";
import { useState } from "react";

import moment from "moment";
import { Reservation } from "../types/reservation";
import ReservationItem from "../components/ReservationItem";
import { MaterialIcons } from "@expo/vector-icons";
import {
  MyActiveReservations,
  MyHistoricReservations,
  MyRemovedReservations,
} from "../MOCKS/reservations";

const Tab = createMaterialTopTabNavigator();

const ReservationComponent = ({
  reservations,
}: {
  reservations: Reservation[];
}) => {
  const [index, setIndex] = useState(5);
  return (
    <NativeBaseProvider>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => setIndex(index + 5)}
        contentContainerStyle={{ paddingBottom: index > 5 ? 0 : 500 }}
        data={reservations.slice(0, index)}
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
    </NativeBaseProvider>
  );
};

const Incoming = () => (
  <ReservationComponent reservations={MyActiveReservations} />
);

const History = () => (
  <ReservationComponent reservations={MyHistoricReservations} />
);

const Removed = () => (
  <ReservationComponent reservations={MyRemovedReservations} />
);

const Reservations = () => {
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

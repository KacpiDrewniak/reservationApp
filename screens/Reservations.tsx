import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList, NativeBaseProvider, ScrollView } from "native-base";
import { useEffect, useState } from "react";
import {
  MyReservations,
  reservations,
  splitReservationsByDate,
} from "../MOCKS/reservations";
import moment from "moment";
import { Reservation } from "../types/reservation";
import ReservationItem from "../components/ReservationItem";

const Tab = createMaterialTopTabNavigator();

const History = () => {
  const [index, setIndex] = useState(5);

  return (
    <NativeBaseProvider>
      <FlatList
        onScrollEndDrag={() => setIndex(index + 5)}
        data={MyReservations.slice(0, index)}
        renderItem={({ item }) =>
          item.isDate ? (
            <Text style={styles.date}>
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

const Removed = () => {
  return (
    <NativeBaseProvider>
      <ScrollView />
    </NativeBaseProvider>
  );
};

const Incoming = () => {
  return (
    <NativeBaseProvider>
      <ScrollView />
    </NativeBaseProvider>
  );
};

const Reservations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Removed" component={History} />
      <Tab.Screen name="Incoming" component={History} />
    </Tab.Navigator>
  );
};
export default Reservations;

const styles = StyleSheet.create({
  date: {
    padding: 10,
  },
});

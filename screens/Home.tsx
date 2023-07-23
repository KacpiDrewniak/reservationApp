import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Icon, NativeBaseProvider } from "native-base";
import AppBar from "./../components/AppBar";
import Layout from "./../components/Layout";
import Select from "./../components/Select";
import { cities } from "../contants/cities";
import { countries } from "../contants/countries";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./../components/BottomNavigator";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();

  // tutaj przechowujemy obecne wybrane miasto ( na początku jest to pusty string )
  const [city, setCity] = useState("");
  // tutaj przechowujemy obecne wybrane państwo ( na początku jest to pusty string )
  const [country, setCountry] = useState("");

  return (
    <NativeBaseProvider>
      <AppBar title="Rezerwacje" />
      <Layout>
        <Select
          value={city}
          setValue={setCity}
          items={cities}
          label="Choose city"
        />
        <Select
          // przekazujemy stan i funkcję do jego zmiany jako parametr do komponentu select
          value={country}
          setValue={setCountry}
          items={countries}
          label="Choose country"
        />
        <Button
          width={width / 1.5}
          size="lg"
          leftIcon={<Icon as={Ionicons} name="search" />}
        >
          Szukaj
        </Button>
        <Button
          mt={2}
          width={width / 1.5}
          size="lg"
          onPress={() => navigation.navigate("Reservations" as never)}
        >
          Go to reservations screen
        </Button>
      </Layout>
    </NativeBaseProvider>
  );
};

export default Home;

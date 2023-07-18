import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Icon, NativeBaseProvider } from "native-base";
import AppBar from "./components/AppBar";
import Layout from "./components/Layout";
import Select from "./components/Select";
import { cities } from "./contants/cities";
import { countries } from "./contants/countries";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./components/BottomNavigator";

const { width } = Dimensions.get("window");

const App = () => {
  // tutaj przechowujemy obecne wybrane miasto ( na początku jest to pusty string )
  const [city, setCity] = useState("");
  // tutaj przechowujemy obecne wybrane państwo ( na początku jest to pusty string )
  const [country, setCountry] = useState("");

  useEffect(() => {
    console.log("start app useEffect");
    // funkcja uruchomi sie tak samo jak componentDiDMount
  }, []);

  useLayoutEffect(() => {
    console.log("start app useLayoutEffect");
    // funkcja uruchomi sie po wyrenderowaniu layoutu
  });

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
          // tutaj on press wywołuje funkcje
          onPress={() => console.log("hello world")}
        >
          Szukaj
        </Button>
      </Layout>
      <BottomNavigator />
    </NativeBaseProvider>
  );
};

export default App;

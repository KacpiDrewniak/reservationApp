import React, { useState } from "react";
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
  const [city, setCity] = useState("");
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
          value={country}
          setValue={setCountry}
          items={countries}
          label="Choose country"
        />
        <Button
          width={width / 1.5}
          size="lg"
          leftIcon={<Icon as={Ionicons} name="search" />}
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

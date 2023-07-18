import React from "react";
import { NativeBaseProvider } from "native-base";
import AppBar from "./components/AppBar";
import Layout from "./components/Layout";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppBar title="Rezerwacje" />
      <Layout />
    </NativeBaseProvider>
  );
};

export default App;

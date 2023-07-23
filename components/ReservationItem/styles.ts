import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },
  rightElement: {
    padding: 3,
    display: "flex",
    backgroundColor: "lightblue",
    flex: 0.75,
  },
  leftElement: {
    display: "flex",
    flex: 0.25,
    padding: 3,
  },
  objectStyles: { fontWeight: "bold" },
});

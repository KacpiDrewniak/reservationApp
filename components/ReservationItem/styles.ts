import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },
  rightElement: {
    paddingLeft: 10,
    gap: 3,
    padding: 3,
    display: "flex",
    flex: 0.75,
  },
  leftElement: {
    alignItems: "flex-end",
    borderRightColor: "orange",
    borderRightWidth: 2,
    display: "flex",
    flex: 0.25,
    gap: 3,
    padding: 3,
  },
  objectStyles: { fontWeight: "bold", color: "orange" },
});

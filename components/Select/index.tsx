import React from "react";
import {
  Box,
  CheckIcon,
  Container,
  Select as NativeBaseSelect,
} from "native-base";
import { Dimensions } from "react-native";
import { Select as SelectType } from "./types";

const { width } = Dimensions.get("window");

const Select = ({ items, value, setValue, label }: SelectType) => (
  <Container>
    <Box width="full">
      <NativeBaseSelect
        mb={3}
        backgroundColor="white"
        padding={4}
        width="full"
        selectedValue={value}
        minWidth={width / 1.5}
        accessibilityLabel={label}
        placeholder={label}
        size="lg"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        // nasluchujemy na zmiane jesli klikmniemy w coś z listy za pomocą setValue zmienimy stan w komponencei App.tsx
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        {items.map((props) => (
          <NativeBaseSelect.Item key={props.value} {...props} />
        ))}
      </NativeBaseSelect>
    </Box>
  </Container>
);

export default Select;

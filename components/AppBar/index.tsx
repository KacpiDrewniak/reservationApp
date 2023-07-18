import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AppBar as AppBarType } from "./types";
import { containerAppBarStyles } from "./styles";

const AppBar = ({ title }: AppBarType) => (
  <>
    <StatusBar backgroundColor="violet.600" barStyle="light-content" />
    <Box safeAreaTop bg="violet.600" width="100%" />
    <HStack {...containerAppBarStyles}>
      <HStack alignItems="center">
        <IconButton
          borderRadius="50"
          overflow="hidden"
          icon={<Icon size="xl" as={MaterialIcons} name="menu" color="white" />}
        />
        <Text color="white" fontSize="24" fontWeight="bold">
          {title}
        </Text>
      </HStack>
    </HStack>
  </>
);

export default AppBar;

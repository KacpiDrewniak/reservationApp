import { Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const BottomNavigator = () => {
  const [selected, setSelected] = useState(1);
  return (
    <Box width="100%" alignSelf="center">
      <HStack bg="blue.500" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name={"home"} />}
              color="white"
              size="lg"
            />
            <Text color="white" fontSize="16">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="white"
              size="lg"
            />
            <Text color="white" fontSize="16">
              Ulubione
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="cart" />}
              color="white"
              size="lg"
            />
            <Text color="white" fontSize="16">
              Rezerwacje
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="white"
              size="lg"
            />
            <Text color="white" fontSize="16">
              Konto
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomNavigator;

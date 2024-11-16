import React, { useState } from "react";
import {
  Box,
  Center,
  VStack,
  HStack,
  Icon,
  Pressable,
  View,
} from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";


import { styles } from "./style";
import { StyledHeaderText } from "../../../settings/constants/TextConstants";


export default function BottomNavigation ({ navigation }){
  const [pressedIcon, setPressedIcon] = useState(null);

  const handlePressIn = (iconName) => {
    setPressedIcon(iconName);
  };

  const handlePressOut = () => {
    setPressedIcon(null);
  };

  const iconColor = (iconName) =>
    pressedIcon === iconName ? "lightgrey" : "white";

  const menuItems = [
    {
      path: "Home",

      color: "home",
      title: "Главная",
      icon: "home",
    },
    {
      path: "History",

      color: "history",
      title: "История",
      icon: "history",
    },
    {
      path: "Notifications",

      color: "notifications",
      title: "Уведомления",
      icon: "notifications",
    },
    {
      path: "Profile",

      color: "profile",
      title: "Профиль",
      icon: "user-circle",
    },
  ];

  return (
    <View style={styles.container}>
      <Center mt={4}>
        <HStack
          space={8}
          justifyContent="space-around"
          alignItems="center"
          width="90%"
        >
          {menuItems.map((item, index) => (
            <Pressable key={index} onPress={() => navigation.navigate(item.path)}>
              <VStack alignItems="center">
                <Icon
                  as={FontAwesome}
                  name={item.icon}
                  color={iconColor(item.color)}
                  size="xl"
                  mb={1}
                />
                <StyledHeaderText>{item.title}</StyledHeaderText>
              </VStack>
            </Pressable>
          ))}

      
        </HStack>
      </Center>
    </View>
  );
};



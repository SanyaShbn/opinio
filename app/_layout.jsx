import { Link, Stack } from "expo-router";
import { Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { mainColor, primaryColor } from "./settings/constants/Colors";
import { Pressable, Text, View } from "react-native";
import { header } from "./processes/Navigation/Header/styles";
import HeaderTopSearch from "./processes/Navigation/Header/HeaderTop/HeaderTopSearch";
import { useState } from "react";
import HeaderTopPreviousPage from "./processes/Navigation/Header/HeaderTop/HeaderTopPreviousPage";
import { HOME } from "./settings/api/navigation";

function RootLayout() {
  const [pressedIcon, setPressedIcon] = useState(null);

  const handlePressIn = (iconName) => {
    setPressedIcon(iconName);
  };

  const handlePressOut = () => {
    setPressedIcon(null);
  };

  const createScreen = (name, title, pathBack) => {
    return (
      <Stack.Screen
        name={name}
        options={{
          //     headerLeft: () => <Link href={pathBack} >
          //     <Icon as={Ionicons} name="arrow-back" color={mainColor} size={10} />
          // </Link>,

          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: "500",
                lineHeight: 24,
                marginLeft: -100,
                textAlign: "center",
                color: "white",
              }}
            >
              Opinio: {title}
            </Text>
          ),
        }}
      />
    );
  };

  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerBackground: () => <View style={header.headerPrimary}></View>,
          headerTintColor: mainColor,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerLeft: () => <Text style={header.headerText}>Opinio</Text>,
            headerTitle: () => {
              <View></View>;
            },
            headerRight: () => (
              <Pressable
                onPressIn={() => handlePressIn("search")}
                onPressOut={handlePressOut}
                onPress={() => console.log("Search pressed")}
                style={header.headerIcon}
              >
                <Icon as={Ionicons} name="search" color={"white"} size="xl" />
              </Pressable>
            ),
          }}
        />

        {createScreen("pages/home/(polls)/category", "По категориям", HOME)}
        {createScreen("pages/home/(polls)/popular", "Популярное", HOME)}
        {createScreen("pages/home/(polls)/new", "Новинки", HOME)}
        {createScreen("pages/home/all", "Все", HOME)}
      </Stack>
    </NativeBaseProvider>
  );
}

export default RootLayout;

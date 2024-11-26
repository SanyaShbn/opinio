import { Link, Stack, useRouter } from "expo-router";
import { Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { mainColor, primaryColor } from "./settings/constants/Colors";
import { Pressable, Text, View } from "react-native";
import { header } from "./processes/Navigation/Header/styles";
import HeaderTopSearch from "./processes/Navigation/Header/HeaderTop/HeaderTopSearch";
import { useState } from "react";
import HeaderTopPreviousPage from "./processes/Navigation/Header/HeaderTop/HeaderTopPreviousPage";
import { HOME } from "./settings/api/navigation";
import { Provider } from "react-redux";
import store from "./processes/store/store";

function RootLayout() {
  const [pressedIcon, setPressedIcon] = useState(null);

  const handlePressIn = (iconName) => {
    setPressedIcon(iconName);
  };

  const handlePressOut = () => {
    setPressedIcon(null);
  };
  const router = useRouter();
  const createScreen = (name, title) => {
    return (
      <Stack.Screen
        name={name}
        options={{
 

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

  const createSearchScreen=(name)=>{
    return   <Stack.Screen
    name={name}
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
  }

  const createSearchBackScreen=(name)=>{

    return( <Stack.Screen
    name={name}
    options={{


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
          Opinio
        </Text>
      ),
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
  />)
  }

  return (
    <Provider store={store}>
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

  
        {createScreen("pages/home/(polls)/popular", "Популярное")}
        {createScreen("pages/login/LoginPage", "Войти")}
        {createScreen("pages/home/(polls)/new", "Новинки")}
        {createScreen("pages/home/all", "Все")}
        {createScreen("pages/getstarted/role/Role", "Выбрать режим")}
        {createScreen("pages/getstarted/role/auth/Citizen", "Регистрация")}
        {createScreen("pages/getstarted/role/auth/Organization", "Регистрация")}
        {createScreen("pages/getstarted/role/auth/Category", "Выбор опросов")}
        {createScreen("pages/getstarted/role/auth/CompanyInfo", "О компании")}
        {createSearchBackScreen("pages/home/(polls)/category")}
        {createScreen("pages/home/(polls)/all", "Все")}
        {createScreen("pages/polls-creation/PollsCreationStatistics", "Статистика")}
        {createScreen("pages/home/(polls)/overview/pollOverview", "Обзор")}
        {createScreen("pages/home/(polls)/overview/constructor", "Конструктор")}
        {createScreen("pages/organization-view/OrganizationPostsViewExpanded", "Обсуждение")}
        {createSearchBackScreen("pages/home/(polls)/orgPolls")}
        {createSearchBackScreen("pages/home/discussions/discussions")}
        <Stack.Screen
          name="pages/getstarted/main/index"
          options={{
            headerLeft: () => {},
            headerTitle: () => {
              return (
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 20,
                    fontWeight: "500",
                    lineHeight: 24,
                    marginLeft: -100,
                    textAlign: "center",
                    color: "black",
                  }}
                ></Text>
              );
            },
            headerRight: () => {},
          }}
        />

   
      </Stack>
    </NativeBaseProvider>
    </Provider>
  );
}

export default RootLayout;

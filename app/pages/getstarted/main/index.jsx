import { View } from "native-base";
import { getstarted } from "./style.js";
import { Image, Linking, Text } from "react-native";
import ButtonPrimary from "../../../shared/Buttons/ButtonPrimary.js";
import ButtonSecondary from "../../../shared/Buttons/ButtonSecondary.js";
import { Link } from "expo-router";

function GetStarted() {
  const source = require("../../../settings/images/getstarted.png");
  return (
    <View style={getstarted.firstpage}>
      <View style={getstarted.titleBox}>
        <Text style={getstarted.title}>Добро пожаловать в</Text>
        <Text style={getstarted.logo}>Opinio</Text>
        <Text style={getstarted.description}>
          платформа для онлайн соц. опросов
        </Text>
      </View>
      <View style={getstarted.imageBox}>
        <Image
          source={source}
          alt=" Logo"
         
          resizeMode="contain"
        />
      </View>
      <View style={getstarted.footer}>
        <View style={getstarted.signupButtonWrapper}>
       
          <ButtonSecondary
            type={"getStartedButton"}
            text={"Зарегистрироваться"}
          />
         
        </View>

      
      </View>
      <View style={getstarted.authWrapper}>
          <View style={getstarted.authWrapper}>
            <Text style={getstarted.authDesc}>Уже есть аккаунт?</Text>
            <Link href={"pages/login/LoginPage"}>
            <Text style={getstarted.authLink}>Войти</Text>
            </Link>
          
          </View>
        </View>
    </View>
  );
}

export default GetStarted;

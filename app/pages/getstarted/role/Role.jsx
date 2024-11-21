import { Center, Link, Pressable, View } from "native-base";
import { role } from "./role.js";
import { Image, Linking, Text } from "react-native";
import ButtonPrimary from "../../../shared/Buttons/ButtonPrimary.js";
import { useRouter } from "expo-router";

function Role() {
  const image1 = require("../../../settings/images/role1.png");
  const image2 = require("../../../settings/images/role2.png");
 const router = useRouter()
  return (
    <View style={role.container}>
      <View style={role.roleWrapper}>
        <View style={role.imageBox}>
        <Center>
          <Image source={image1} alt=" Logo" resizeMode="contain" />
          </Center>
        </View>
        <View>
          <Text style={role.title}>Если Вы хотите поучаствовать в опросах</Text>
          <Center>
          <Pressable style={role.button} onPress={()=>{router.navigate("pages/getstarted/role/auth/Citizen")}}>
            {/* <Link href={"pages/getstarted/role/auth/Citizen"}> */}
              
                <Text style={role.buttonText}>Участвовать</Text>
            
            {/* </Link> */}
             </Pressable>
          </Center>
        </View>
      </View>
      <View style={role.roleWrapper2}>
        <View style={role.imageBox}>
            <Center>
            <Image source={image2} alt=" Logo" resizeMode="contain" />
            </Center>
         
        </View>
        <View>
          <Text style={role.title}>Если Вы хотите создать опросы</Text>
          <Center>
  

            <Pressable style={role.button} onPress={()=>{router.navigate("pages/getstarted/role/auth/Organization")}}>
            {/* <Link href={"pages/getstarted/role/auth/Citizen"}> */}
              
                <Text style={role.buttonText}>Создать</Text>
            
            {/* </Link> */}
             </Pressable>
          </Center>
        </View>
      </View>
    </View>
  );
}

export default Role;

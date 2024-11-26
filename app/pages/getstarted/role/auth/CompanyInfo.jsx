import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  InputGroup,
  Pressable,
  Select,
  Text,
  View,
} from "native-base";
import { useForm } from "react-hook-form";
import { role } from "./../role";
import { StyleSheet, TextInput } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  setUserdata,
} from "../../../../processes/store/slices/userSlice";
const CompanyInfo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // // Effect
  // useEffect(() => {
  //     navigation.addListener('beforeRemove', (e) => {
  //         e.preventDefault();
  //         console.log('onback');
  //         // Do your stuff here
  //         navigation.dispatch(e.data.action);
  //        // router.replace("(tabs)/Home");
  //     });
  // }, []);

  const { register, handleSubmit, setValue } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const checkForm = (formdata) => {
    for (let key in formdata) {
      if (!formdata[key]) {
        return true;
      }
    }
    return true;
  };

  const onSubmit = useCallback((formData) => {

    if(checkForm(formData)){
      dispatch(setUserdata({...formData}))
      router.navigate("pages/getstarted/role/auth/Category")
    }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const onChangeField = useCallback(
    (name) => (text) => {
      if (name === "phone") {
        if (/^\d*$/.test(text)) {
          setValue(name, text);
        } else {
          setMessage("Поле номер должно содержать только цифры");
        }
      } else if (name === "email") {
        if (validateEmail(text)) {
          setValue(name, text);
        } else {
          setMessage("Введите корректный email");
        }
      } else {
        setValue(name, text);
      }
    },
    []
  );  




  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("mission");
    register("description");
    register("phone");
    register("email");
    register("link");
  }, [register]);

  return (
    <Box width={"100%"}>
      <Center>
        <Box maxW="80%" style={{ width: "100%", gap: 10 }} pt={30}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Информация об организации
          </Text>
          <Center>
            <Input
              autoCompleteType="mission"
              placeholder="миссия"
              onChangeText={onChangeField("mission")}
            />
          </Center>
          <Center>
            <Input
              autoCompleteType="description"
              placeholder="Описание"
              onChangeText={onChangeField("description")}
            />
          </Center>
          <Center>
            <Input
              autoCompleteType="phone"
              placeholder="Телефон"
              onChangeText={onChangeField("phone")}
            />
          </Center>

          <Center>
            <Input
              autoCompleteType="email"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={onChangeField("email")}
            />
          </Center>

          <Center>
            <Input
              isRequired={true}
              autoCompleteType="link"
              placeholder="Ссылка на сайт"
              onChangeText={onChangeField("link")}
            />
          </Center>

          <Center>
            <View style={{ marginTop: 30 }}></View>

            <Button
              style={{ ...role.button, ...role.buttonText }}
              onPress={handleSubmit(onSubmit)}
            >
              Далее
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default CompanyInfo;

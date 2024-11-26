import { View } from "react-native";
import { Box, Button, Center, Input, Pressable, Text } from "native-base";
import { styles } from "./style";
import { Select } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { CheckIcon } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "../../../../shared/util/formatDate";
import { role } from "../role";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../../../processes/store/slices/activitySlice";
import { useForm } from "react-hook-form";
import { setUserdata } from "../../../../processes/store/slices/userSlice";
function Organization() {
  const router = useRouter();

  const [service, setService] = useState("");

  const activityList = useSelector(getActivities);

  const { register, handleSubmit, setValue } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const checkPassword = (formdata) => {
    if (formdata["password"] != formdata["password2"]) {
      setIsRegistered(false);
      setMessage("Пароли не совпадают!");
    } else if (
      !formdata["login"] ||
      !formdata["password2"] ||
      !formdata["password"] ||
      !formdata["activity"]
    ) {
      setMessage("Не все поля заполнены!");
    } else if (
      formdata["password2"].length < 8 ||
      formdata["password"].length < 8
    ) {
      setMessage("Длина пароля минимум 8 символов!");
    } else {
      setIsRegistered(true);
      setMessage("");
      return true;
    }
    return true;
  };

  const onSubmit = useCallback((formData) => {
  
    
    checkPassword(formData);

    if(checkPassword(formData)){
      dispatch(setUserdata({login:formData["login"], activity:formData["activity"]}))
      router.replace("pages/getstarted/role/auth/CompanyInfo");
    }

   
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("login");
    register("password");
    register("password2");
    register("activity");
  }, [register]);

  return (
    <Box width={"100%"}>
      <Center>
        <Box maxW="80%" style={{ width: "100%", gap: 10 }} pt={30}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Создание аккаунта
          </Text>
          <Center>
            <Input
              size={"xl"}
              mx="3"
              autoCompleteType="login"
              placeholder="Логин"
              width={"100%"}
              onChangeText={onChangeField("login")}
            />
          </Center>

          <Center>
            <Input
              size={"xl"}
              mx="3"
              autoCompleteType="password"
              placeholder="Пароль"
              width={"100%"}
              secureTextEntry
              onChangeText={onChangeField("password")}
            />
          </Center>
          <Center>
            <Input
              secureTextEntry
              size={"xl"}
              mx="3"
              autoCompleteType="password2"
              placeholder="Повторите пароль"
              width={"100%"}
              onChangeText={onChangeField("password2")}
            />
          </Center>

          <Select
           // selectedValue={service}
            autoCompleteType="activity"
            minWidth="200"
            accessibilityLabel="Род деятельности"
            placeholder="Род деятельности"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
           // onValueChange={(itemValue) => setService(itemValue)}
            onValueChange={onChangeField("activity")}
          >
            {activityList.map((item, index) => (
              <Select.Item key={index} value={item.id} label={item.name} />
            ))}
          </Select>

          <Text style={{ color: "#DC143C" }}>{message}</Text>

          <Center>
            <View style={{ marginTop: 30 }}></View>

            <Button
              style={{ ...role.button, ...role.buttonText }}
              onPress={
                handleSubmit(onSubmit)
               
              }
            >
              Далее
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Organization;

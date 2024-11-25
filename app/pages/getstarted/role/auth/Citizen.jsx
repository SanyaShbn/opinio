import { Pressable, Text, View } from "react-native";

import { Box, Button, Center, Input } from "native-base";
import { styles } from "./style";
import { Select } from "native-base";
import { useState } from "react";
import {  CheckIcon } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from "../../../../shared/util/formatDate";
import { role } from './../role';
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { getActivities } from "../../../../processes/store/slices/activitySlice";
function Citizen() {
  const router = useRouter()

    const [service, setService] =useState("");

     const [date, setDate] = useState(new Date()); 
     const [show, setShow] = useState(false);
       

    const onChange = (event, selectedDate) => { 
        const currentDate = selectedDate || date; 
        setShow(false); 
        setDate(currentDate); 
    }; 
        const showDatepicker = () => { setShow(true)};
const activityList = useSelector(getActivities)
  return (
    <Box width={"100%"}>
       <Center>
        <Box maxW="80%" style={{width:'100%',gap:10}}  pt={30}>
       
          <Text style={{fontSize:20,marginBottom:10}} >Создание аккаунта</Text>
          <Center>
            <Input size={"xl"} mx="3" placeholder={"Логин"} width={"100%"}/>
          </Center>
          <Center>
            <Input size={"xl"} mx="3" placeholder={"Пароль"} width={"100%"}/>
          </Center>
          <Center>
            <Input size={"xl"} mx="3" placeholder={"Повторите пароль"} width={"100%"}/>
          </Center>


          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Род деятельности"
            placeholder="Род деятельности"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            {activityList.map((item, index) => (
              <Select.Item key={index} value={item.id} label={item.name}  />
            ))
            }
          </Select>

        <Center>
            <Input size={"xl"} mx="3" placeholder={"Название деятельности"} width={"100%"}/>
          </Center>

          <Center>
            <Input size={"xl"} mx="3" placeholder={"Повторите пароль"} width={"100%"}/>
          </Center>

          <View> 
            <Button variant={"outline"} onPress={showDatepicker} >Выбрать дату рождения: {formatDate(date)}</Button>
            {show && ( 
                <DateTimePicker value={date} mode="date" display="default" onChange={onChange} /> 
                )} 
            </View>
            <Center>
              <View style={{marginTop:30}} >

              </View>
            <Pressable style={role.button} onPress={()=>{router.navigate("pages/getstarted/role/auth/Category")}}>
           
              
                <Text style={role.buttonText}>Далее</Text>
            
        
             </Pressable>
             </Center>
        
      </Box>
      </Center>
    </Box>
  );
}

export default Citizen;

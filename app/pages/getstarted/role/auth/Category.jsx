import { Box, Center, Checkbox, HStack, Text, VStack } from "native-base";
import { Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { role } from "./../role";
import { useState } from "react";
import { styles } from "../../../../settings/constants/polls-creation-styles/PollsCreationAudienceStyles";
import { secondaryColor } from "../../../../settings/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../processes/store/slices/categorySlice";
import { setUserdata } from "../../../../processes/store/slices/userSlice";

function Category() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelected(values);

  };
  
  const dispatch = useDispatch()  
  const handleSave=()=>{
    
    dispatch(setUserdata({categories:selected}))

    router.replace("(tabs)/Home");
  }

  const list = useSelector(getCategories)

  return (
    <Box width={"100%"}>
      <Center>
        <Box maxW="80%" style={{ width: "100%", gap: 10 }}>
      
          <Box style={styles.contentContainer}>
            <VStack space={2}>
              <HStack alignItems="baseline">
                <Text style={styles.textStyle}>Выбор категории опросов</Text>
              </HStack>
              <VStack>
                <Box>
                  <Text>выбрано: {selected.length}</Text>
                </Box>
              </VStack>

              <VStack mt="4" space={6}>
                <Checkbox.Group onChange={handleCheckboxChange}>
                  {list.map((item, index) => (
                    <Checkbox size="md" value={item.id} key={index} my={3}>
                 
                      {item.name}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </VStack>
            </VStack>
          </Box>

          <Center>
            <View style={{ marginTop: 30 }}></View>

            {selected.length > 0 ? (
              <Pressable
                style={role.button}
                onPress={handleSave}
              >
                <Text style={role.buttonText}>Сохранить</Text>
              </Pressable>
            ) : null}
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Category;

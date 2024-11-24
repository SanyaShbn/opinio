import { Box, Center, Checkbox, HStack, Text, VStack } from "native-base";
import { Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { role } from "./../role";
import { useState } from "react";
import { styles } from "../../../../settings/constants/polls-creation-styles/PollsCreationAudienceStyles";
import { secondaryColor } from "../../../../settings/constants/Colors";
import { useSelector } from "react-redux";
import { getCategories } from "../../../../processes/store/slices/categorySlice";

function Category() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelected(values);
  };

  const list  = useSelector(getCategories)
  

  return (
    <Box width={"100%"}>
      <Center>
        <Box maxW="80%" style={{ width: "100%", gap: 10 }} pt={30}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Создание аккаунта
          </Text>
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
                onPress={() => {
                  router.replace("(tabs)/Home");
                }}
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

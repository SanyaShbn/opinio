import { Box, HStack, VStack,Text, Checkbox } from "native-base";
import { useSelector } from "react-redux";
import { getCategories } from "../../processes/store/slices/categorySlice";
import { useRouter } from "expo-router";
import { useState } from "react";
import { styles } from "../../settings/constants/polls-creation-styles/PollsCreationAudienceStyles";
function UserInterests({data}) {

    const list = useSelector(getCategories)

    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const handleCheckboxChange = (values) => {
      setSelected(values);
    };

    return ( 
    <Box>

                <VStack space={2}>
              <HStack alignItems="baseline">
                <Box style={{padding:5}} ></Box>
                <Text style={styles.textStyle} >Выбор категории опросов</Text>
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
     );
}

export default UserInterests;
import React, { useState } from "react";
import { Box, Text, Input, VStack, HStack, Checkbox } from "native-base";
import { styles } from "../../settings/constants/polls-creation-styles/PollsCreationAudienceStyles";
import TabsMenuThreeItems from "../../shared/Tabs/TabsMenuThreeItems";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";
import secondaryColor from "../../settings/constants/Colors";

const PollsCreationAudience = () => {

  const [groupValue, setGroupValue] = useState(["Услуги"]);

  return (
    <Box style={styles.container}>

      <Box style={styles.tabsContainer}>
        <TabsMenuThreeItems label1={"Статистика"} label2={"Настройки"} label3={"Аудитория"} />
      </Box>

      <Box style={styles.contentContainer}>
        <VStack space={2}>
            <HStack alignItems="baseline">
                <Text style={styles.textStyle}>Выбор категории опросов</Text>
            </HStack>
        <VStack>
          <Box>
            <Text>выбрано: {groupValue.length}</Text>
          </Box>
        </VStack>
        <Checkbox.Group colorScheme={secondaryColor} gap={"30px"} defaultValue={groupValue} accessibilityLabel="pick an item" onChange={values => {
                        setGroupValue(values || []);}}>
          <Checkbox value="Городская инфраструктура" my="1">
            <Text style={styles.checkboxTextStyle}>Городская инфраструктура</Text>
          </Checkbox>
          <Checkbox value="Здравоохранение" my="1">
            <Text style={styles.checkboxTextStyle}>Здравоохранение</Text>
          </Checkbox>
          <Checkbox value="Образование" my="1">
            <Text style={styles.checkboxTextStyle}>Образование</Text>
          </Checkbox>
          <Checkbox value="Культура" my="1">
            <Text style={styles.checkboxTextStyle}>Культура</Text>
          </Checkbox>
          <Checkbox value="Продукт" my="1">
            <Text style={styles.checkboxTextStyle}>Продукт</Text>
          </Checkbox>
          <Checkbox value="Услуги" my="1">
            <Text style={styles.checkboxTextStyle}>Услуги</Text>
          </Checkbox>
        </Checkbox.Group>
        </VStack>
        <Box style={styles.inputFieldContainer}>
            <Input 
              style={styles.inputField}
              fontSize={18}
              placeholder="Род деятельности"
              InputRightElement={<MaterialIcons name="keyboard-arrow-down" color="#737373" size="28" style={{ paddingRight: 15 }}/>}
              />
            <Input 
              style={styles.inputField}
              fontSize={20}
              placeholder="Дата рождения"
            />
        </Box>
       </Box>
       <Box style={styles.contentContainer2}>
        <ButtonSecondary text={"Сохранить"} type="pollsCreationSettingsVariant"/>
       </Box>
    </Box>
  );
};

export default PollsCreationAudience;

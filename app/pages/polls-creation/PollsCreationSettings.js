import React, { useState } from "react";
import { Box, Text, Pressable, Input, ScrollView } from "native-base";
import { styles } from "../../settings/constants/polls-creation-styles/PollsCreationSettingsStyles";
import TabsMenuThreeItems from "../../shared/Tabs/TabsMenuThreeItems";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QuestionAnswer from "../../features/QuestionAnswer/QuestionAnswer";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";

const PollsCreationSettings = ({ pollsName="Название опроса", totalNumber=1, questionName="Название  вопроса?" }) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.tabsContainer}>
        <TabsMenuThreeItems label1={"Статистика"} label2={"Настройки"} label3={"Аудитория"} />
      </Box>
      
      <Box style={styles.contentContainer}>
        {/* Первый контейнер */}
        <Box style={styles.contentContainer1}>
          <Box style={{ width: 170, height: 30 }}>
            <Text style={styles.textStyle}>{pollsName}</Text>
          </Box>
          <Box style={{ width: 90, height: 30 }}>
            <Text style={styles.textStyle}>Всего: {totalNumber}</Text>
          </Box>
        </Box>

        {/* Второй контейнер */}
        <Box style={styles.contentContainer2}>
          <Box style={styles.questionNamePlusDeleteIconContainer}>
            <Box style={{ width: 200, height: 30 }}>
              <Text style={styles.textStyle}>{questionName}</Text>
            </Box>
            <Pressable>
              <MaterialIcons name="delete" size={28} color={"#E96AA8"} />
            </Pressable>
          </Box>
          <Box style={styles.answersContainer}>
            <QuestionAnswer />
            <QuestionAnswer />
            <QuestionAnswer />
            <QuestionAnswer />
          </Box>
          <Box style={styles.inputFieldContainer}>
            <Input 
              style={styles.inputField}
              variant="rounded"
              fontSize={18}
              placeholder="Минимальное кол-во"
              InputRightElement={<MaterialIcons name="keyboard-arrow-down" color="#737373" size="28" style={{ paddingRight: 15 }}/>}
            />
          </Box>
        </Box>

        {/* Третий контейнер */}
        <Box style={styles.contentContainer3}>
          <ButtonPrimary text={"Добавить +"} type="pollsCreationSettingsVariant"/>
          <ButtonSecondary text={"Сохранить"} type="pollsCreationSettingsVariant"/>
        </Box>
      </Box>
    </Box>
  );
};

export default PollsCreationSettings;

import React, { useState } from "react";
import { Box, Text, VStack, Progress, HStack, Center, Modal } from "native-base";
import { styles } from "../../settings/constants/polls-completion-styles/PollsCompletingStyles";
import QuestionAnswer from "../../features/QuestionAnswer/QuestionAnswer";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";
import ClosePollModal from "../../widgets/modals/ClosePollModal";

const PollsCompleting = ({ pollsName="Название опроса", questionName="Название  вопроса?" }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Box style={styles.container}>
      
        <Box style={styles.contentContainer1}>
          <Box style={{ width: 170, height: 30 }}>
            <Text style={styles.textStyle}>{pollsName}</Text>
          </Box>
          <Box style={{ width: 90, height: 30 }}>
            <Text style={styles.textStyle}>1/2</Text>
          </Box>
        </Box>

        <VStack w="100%">
            <Progress colorScheme="secondary" value={45} />
        </VStack>

        <Box style={styles.contentContainer2}>
          <Box style={styles.counterContainer}>
            <Text style={styles.counterTextStyle}>Выбрано {} из {}</Text>
            <Text style={styles.counterTextStyle}>минимум </Text>
          </Box>
          <Box style={{ width: 200, height: 30 }}>
            <Text style={styles.textStyle}>{questionName}</Text>
          </Box>
        </Box>
        <Box style={styles.answersContainer}>
          <QuestionAnswer />
          <QuestionAnswer />
          <QuestionAnswer />
          <QuestionAnswer />
        </Box>
        <Box style={styles.inputFieldContainer}>
        </Box>

        <Box style={styles.contentContainer3}>
          <HStack style={styles.buttonsContainer}>
            <ButtonSecondary text={"Назад"} type="pollsCompletingVariant"/>
            <ButtonPrimary text={"Далее"} type="pollsCompletingVariant"/>
          </HStack>
        </Box>

        {isModalVisible && <Box style={styles.overlay} />}
        <Center styles={styles.modalContent}>
          <Modal isOpen={isModalVisible} onClose={toggleModalVisibility}>
              <ClosePollModal isOpen={isModalVisible} onConfirm={toggleModalVisibility} onCancel={toggleModalVisibility}/>
          </Modal>
        </Center>

    </Box>
  );
};

export default PollsCompleting;
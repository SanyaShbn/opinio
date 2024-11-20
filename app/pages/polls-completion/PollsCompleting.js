import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Progress, HStack, Center, Modal, Alert, IconButton, CloseIcon } from "native-base";
import { styles } from "../../settings/constants/polls-completion-styles/PollsCompletingStyles";
import QuestionAnswer from "../../features/QuestionAnswer/QuestionAnswer";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";
import ClosePollModal from "../../widgets/modals/ClosePollModal";

const PollsCompleting = ({ pollsName = "Название опроса", questions = [] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelectAnswer = (answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      if (!newAnswers[currentQuestionIndex]) {
        newAnswers[currentQuestionIndex] = [];
      }
      if (newAnswers[currentQuestionIndex].includes(answerIndex)) {
        newAnswers[currentQuestionIndex] = newAnswers[currentQuestionIndex].filter((index) => index !== answerIndex);
      } else {
        newAnswers[currentQuestionIndex].push(answerIndex);
      }
      return newAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex]?.length < currentQuestion.requiredAnswers || 
      selectedAnswers[currentQuestionIndex]?.length == null) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      if (currentQuestionIndex < totalQuestions) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const selectedAnswerIndexes = selectedAnswers[currentQuestionIndex] || [];
  const progressValue = ((currentQuestionIndex + 1) / (totalQuestions + 1)) * 100;

  return (
    <Box style={styles.container}>
      <Box style={styles.contentContainer1}>
        <Box style={{ width: 170, height: 30 }}>
          <Text style={styles.textStyle}>{pollsName}</Text>
        </Box>
        <Box style={{ width: 120, height: 30 }}>
          <Text style={styles.textStyle}>
            {currentQuestionIndex < totalQuestions ? `${currentQuestionIndex + 1}/${totalQuestions}` : `Завершено`}
          </Text>
        </Box>
      </Box>

      <VStack w="100%">
        <Progress colorScheme="secondary" value={progressValue} />
      </VStack>

      {currentQuestionIndex < totalQuestions ? (
        <>
          <Box style={styles.contentContainer2}>
            <Box style={styles.counterContainer}>
              <Text style={styles.counterTextStyle}>
                Выбрано {selectedAnswerIndexes.length} из {currentQuestion.answers.length}
              </Text>
              <Text style={styles.counterTextStyle}>минимум {currentQuestion.requiredAnswers}</Text>
            </Box>
            <Box style={{ width: "100%", height: 30, alignItems: "flex-start" }}>
              <Text style={styles.textStyle}>{currentQuestion.questionText}</Text>
            </Box>
          </Box>
          <Box style={styles.answersContainer}>
            {currentQuestion.answers.map((answer, index) => (
              <QuestionAnswer
                key={index}
                answerVariant={answer}
                selected={selectedAnswerIndexes.includes(index)}
                onSelect={() => handleSelectAnswer(index)}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box style={styles.thankYouContainer}>
          <Text style={styles.thankYouText}>Благодарим за пройденный опрос!</Text>
        </Box>
      )}
      
      <Box style={styles.contentContainer3}>
      {showAlert && (
        <Alert w="85%" status="error" position="absolute" bottom="10px" alignItems="center" zIndex={1} marginBottom={200}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize={14} color="coolGray.800">
                  Выберите минимально допустимое количество ответов!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{ borderWidth: 0 }}
                icon={<CloseIcon size="3" />}
                _icon={{ color: "coolGray.600" }}
                onPress={() => setShowAlert(false)}
              />
            </HStack>
          </VStack>
        </Alert>
      )}
        {currentQuestionIndex < totalQuestions ? (
          <HStack style={styles.buttonsContainer}>
            <ButtonSecondary text={"Назад"} type="pollsCompletingVariant" onPress={handlePreviousQuestion} />
            <ButtonPrimary text={"Далее"} type="pollsCompletingVariant" onPress={handleNextQuestion} />
          </HStack>
        ) : (
          <HStack style={styles.buttonsContainer}>
            <ButtonPrimary text={"Закончить"} type="confirmPollsCompletionVariant" onPress={() => console.log("Опрос завершен")} />
          </HStack>
        )}
      </Box>

      {isModalVisible && <Box style={styles.overlay} />}
      <Center style={styles.modalContent}>
        <Modal isOpen={isModalVisible} onClose={toggleModalVisibility}>
          <ClosePollModal isOpen={isModalVisible} onConfirm={toggleModalVisibility} onCancel={toggleModalVisibility} />
        </Modal>
      </Center>
    </Box>
  );
};

export default PollsCompleting;
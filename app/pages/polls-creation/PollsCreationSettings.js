import React, { useState } from "react";
import { Box, Text, Pressable, FlatList, Input, Select, ScrollView } from "native-base";
import { styles } from "../../settings/constants/polls-creation-styles/PollsCreationSettingsStyles";
import TabsMenuThreeItems from "../../shared/Tabs/TabsMenuThreeItems";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QuestionAnswer from "../../features/QuestionAnswer/QuestionAnswer";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";

const PollsCreationSettings = ({ initialPollsName = "", initialTotalNumber = 1 }) => {
  const [polls, setPolls] = useState([{ pollName: initialPollsName, questions: [{ questionName: "", answers: [] }] }]);
  const [totalPolls, setTotalPolls] = useState(initialTotalNumber);

  const addPoll = () => {
    setPolls([...polls, { pollName: "", questions: [{ questionName: "", answers: [] }] }]);
    setTotalPolls(totalPolls + 1);
  };

  const addAnswer = (pollIndex, questionIndex) => {
    const newPolls = [...polls];
    newPolls[pollIndex].questions[questionIndex].answers.push("");
    setPolls(newPolls);
  };

  const deletePoll = (pollIndex) => {
    setPolls(polls.filter((_, index) => index !== pollIndex));
    setTotalPolls(totalPolls - 1);
  };

  const deleteAnswer = (pollIndex, questionIndex, answerIndex) => {
    const newPolls = [...polls];
    newPolls[pollIndex].questions[questionIndex].answers.splice(answerIndex, 1);
    setPolls(newPolls);
  };

  const renderPoll = ({ item: poll, index: pollIndex }) => (
    <Box key={pollIndex} style={styles.contentContainer2}>
      {poll.questions.map((question, questionIndex) => (
        <Box key={questionIndex}>
          <Box style={styles.questionNamePlusDeleteIconContainer}>
            <Box style={{ width: "80%", height: 30, alignItems:"center", }}>
              <Input 
                variant="unstyled" 
                style={{ ...styles.textStyle, textAlign: "left", justifyContent: "flex-start" }} 
                value={question.questionName} 
                onChangeText={(text) => {
                  const newPolls = [...polls];
                  newPolls[pollIndex].questions[questionIndex].questionName = text;
                  setPolls(newPolls);
                }} 
                placeholder="Название вопроса?" 
              />
            </Box>
            <Box style={{ height: 30, flexDirection: "row", alignItems:"center", gap: 20 }}>
              <Pressable onPress={() => addAnswer(pollIndex, questionIndex)}>
                <MaterialIcons name="add" size={28} color={"#E96AA8"} />
              </Pressable>
              <Pressable onPress={() => deletePoll(pollIndex)}>
                <MaterialIcons name="delete" size={28} color={"#E96AA8"} />
              </Pressable>
            </Box>
          </Box>
          <ScrollView style={styles.answersContainer}>
            {question.answers.map((answer, answerIndex) => (
              <Box key={answerIndex} style={styles.questionAnswerContainer}>
                <QuestionAnswer
                  answerVariant={answer}
                  isEditable={true}
                  onDelete={() => deleteAnswer(pollIndex, questionIndex, answerIndex)}
                  onChangeText={(text) => {
                    const newPolls = [...polls];
                    newPolls[pollIndex].questions[questionIndex].answers[answerIndex] = text;
                    setPolls(newPolls);
                  }}
                />
              </Box>
            ))}
            <Box style={styles.inputFieldContainer}>
              <Select
                style={styles.inputField}
                variant="rounded"
                fontSize={18}
                placeholder="Минимальное кол-во ответов"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <MaterialIcons name="check" size={5} />,
                }}
                mt={1}
                placeholderTextColor="#BEBEBE"
              >
                {Array.from({ length: question.answers.length - 1 }, (_, i) => i + 1).map(num => (
                  <Select.Item key={num} label={String(num)} value={String(num)} />
                ))}
              </Select>
            </Box>
          </ScrollView>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box style={styles.container}>
      <Box style={styles.tabsContainer}>
        <TabsMenuThreeItems label1={"Статистика"} label2={"Настройки"} label3={"Аудитория"} />
      </Box>
      <Box style={styles.contentContainer}>
        <Box style={styles.contentContainer1}>
          <Box style={{ width: 200, height: 30, justifyContent:"center" }}>
            <Input 
              variant="unstyled" 
              style={{ ...styles.textStyle, textAlign:"left", textAlignVertical:"top" }} 
              value={polls[0]?.pollName || ''} 
              onChangeText={(text) => {
                const newPolls = [...polls];
                newPolls[0].pollName = text;
                setPolls(newPolls);
              }} 
              placeholder="Название опроса" 
            />
          </Box>
          <Box style={{ width: 170, height: 30 }}>
            <Text style={{...styles.textStyle, textAlign: "right"}}>Всего: {totalPolls}</Text>
          </Box>
        </Box>
        <FlatList
          data={polls}
          renderItem={renderPoll}
          keyExtractor={(item, index) => `poll-${index}`}
          style={{ flexGrow: 1 }}
        />
          <Box style={styles.contentContainer3}>
            <ButtonPrimary text={"Добавить вопрос +"} onPress={addPoll} type="pollsCreationSettingsVariant"/>
            <ButtonSecondary text={"Сохранить"} type="pollsCreationSettingsVariant" onPress={() => console.log("Button is pressed...")}/>
          </Box>
      </Box>
    </Box>
  );
};

export default PollsCreationSettings;
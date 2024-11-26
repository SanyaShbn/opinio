import { useRouter } from "expo-router";
import { Box, Center, Flex, ScrollView, View, VStack } from "native-base";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../processes/store/slices/userSlice";
import PollsCard from "../../../widgets/Cards/PollsCard";
import TabsMenuTwoItems from "./../../../shared/Tabs/TabsMenuTwoItems";
import FilterBar from "./../../../shared/FilterBar/FilterBar";

function OrganizationPolls() {
  const [state, setState] = useState(0);
  const router = useRouter();

  const user = useSelector(getUser);

  const onBonusPress = (id) => {};

  const handleOpenPoll = (id) => {

    router.navigate({pathname:"pages/home/(polls)/overview/pollOverview", params:{pollId:id}}  );
  };
 
  const handleGetContent = (number) => {
    switch (number) {
      case 0:
        return (
          <VStack style={{ gap: 6 }}>
            {user.polls.map((item, index) => (
              <PollsCard
                type="variant3"
                key={index}
                id={item.id}
                topic={item.category.name}
                text={item.title}
                date={item.createdAt}
                questionsNumb={item.questions.length}
                orgname={user.name}
                onBonusPress={onBonusPress}
                buttonClickHandler={handleOpenPoll}
                buttonText={"Обзор"}
              />
            ))}
          </VStack>
        );

      case 1:{
        router.navigate("pages/home/(polls)/overview/constructor")
        return (<></>)
       
      }
    }
  };

  const handleChange = (number) => {
    setState(number);
  };
  return (
    <VStack>
        <Box my="14px">
            <TabsMenuTwoItems
              label1={"Опросы"}
              label2={"Конструктор"}
              handleOnChange={handleChange}
              initValue={state}
            />
          </Box>
      {state == 0 ? (
        <>
        
          <VStack style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Flex style={{ marginBottom: 10 }}>По категориям</Flex>
            <FilterBar />
          </VStack>
        </>
      ) : null}

      <ScrollView style={{ height: 600, width: "100%" }}>
        <Center>{handleGetContent(state)}</Center>
      </ScrollView>
    </VStack>
  );
}

export default OrganizationPolls;

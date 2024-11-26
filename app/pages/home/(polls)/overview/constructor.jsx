import { Box, Center, View, VStack } from "native-base";
import { useState } from "react";
import PollsCreationAudience from './../../../polls-creation/PollsCreationAudience';
import TabsMenuThreeItems from "../../../../shared/Tabs/TabsMenuThreeItems";
import PollsCreationSettings from "../../../polls-creation/PollsCreationSettings";

function Constructor() {
    const [state, setState] = useState(0);

    const handleGetContent = (number) => {
        switch (number) {
          case 0:
            return (
              <VStack style={{ gap: 6 }}>
               
              </VStack>
            );
    
          case 1:
            return (
              <VStack style={{ gap: 6 }}>
               
               <PollsCreationSettings/>
               
              </VStack>
            );
          case 2:
          return (
            <VStack style={{ gap: 6 }}>
              
              <PollsCreationAudience/>
              
            </VStack>
          );
        }
      };
    
      const handleChange = (number) => {
        setState(number);
      };

    return ( 
    
        <VStack>
        <Box my="14px">
          <TabsMenuThreeItems
            label1={"Статистика"}
            label2={"Настройки"}
            label3={"Аудитория"}
            handleChange={handleChange}
            initValue={state}
          />
        </Box>
  
        {/* <VirtualizedList style={{ height: 600, width: "100%" }} getItemCount={}> */}
          <Center>{handleGetContent(state)}</Center>
        {/* </VirtualizedList> */}
      </VStack>
    

);
}

export default Constructor;
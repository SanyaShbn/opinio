import { Box, Center, ScrollView, View, VStack } from "native-base";
import TabsMenuThreeItems from './../../../../shared/Tabs/TabsMenuThreeItems';
import { useState } from "react";
import PollsCard from "../../../../widgets/Cards/PollsCard";
import PollsCreationSettings from "../../../polls-creation/PollsCreationSettings";
import { VirtualizedList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PollsCreationStatistics from "../../../polls-creation/PollsCreationStatistics";

function PollOverview() {
    // const [state, setState] = useState(0);
    // const params = useLocalSearchParams()

    // const {pollId} = params

    // const handleGetContent = (number) => {
    //     switch (number) {
    //       case 0:
    //         return (
    //           <VStack style={{ gap: 6 }}>
               
    //            <PollsCreationStatistics/>
    //           </VStack>
    //         );
    
    //       case 1:
    //         return (
    //           <VStack style={{ gap: 6 }}>
               
    //            <PollsCreationSettings pollId={pollId} />
               
    //           </VStack>
    //         );
    //       case 2:
    //       return (
    //         <VStack style={{ gap: 6 }}>
              
            
    //         </VStack>
    //       );
    //     }
    //   };
    
    //   const handleChange = (number) => {
    //     setState(number);
    //   };

    return ( 
    
        <VStack>
        {/* <Box my="14px">
          <TabsMenuThreeItems
            label1={"Статистика"}
            label2={"Настройки"}
            label3={"Аудитория"}
            handleChange={handleChange}
            initValue={state}
          />
        </Box> */}

        <PollsCreationStatistics/>
  
        {/* <VirtualizedList style={{ height: 600, width: "100%" }} getItemCount={}> */}


          {/* <Center>{handleGetContent(state)}</Center> */}


        {/* </VirtualizedList> */}
      </VStack>
    

);
}

export default PollOverview;
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import TabLayout from "../../../(tabs)/_layout";
import { mainColor } from "../../../settings/constants/Colors";
import { Box, Center, Container, Flex, ScrollView, VStack } from "native-base";
import TabsMenuTwoItems from "../../../shared/Tabs/TabsMenuTwoItems";
import FilterBar from "./../../../shared/FilterBar/FilterBar";
import PollsCard from "../../../widgets/Cards/PollsCard";
import { useState } from "react";
import OrganizationCard from "../../../widgets/Cards/OrganizationCard";
import SliderHeader from "../../../shared/SliderHeader/SliderHeader";

function All() {
  const [state, setState] = useState(0);

  const handleOrganizationClick = (id) => {};

  const handlePollClick = (id) => {};

  const handleGetContent = (number) => {
    switch (number) {
      case 0:
        return (
          <VStack style={{ gap: 6 }}>
            <>
              <SliderHeader
                title={"По категориям"}
                pathTo={"pages/home/bonuses"}
              />
              <ScrollView horizontal>
                <Box p={2}>
                  <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
              </ScrollView>
            </>
              <>
              <SliderHeader
                title={"Новинки"}
                pathTo={"pages/home/bonuses"}
              />
              <ScrollView horizontal>
                <Box p={2}>
                  <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
              </ScrollView>
            </>
            <>
              <SliderHeader
                title={"Новинки"}
                pathTo={"pages/home/bonuses"}
              />
              <ScrollView horizontal>
                <Box p={2}>
                  <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
                <Box p={2}>
                <PollsCard  />
                </Box>
              </ScrollView>
            </>
          </VStack>
        );

      case 1:
        return (
            <VStack style={{ gap: 6 }}>
            <>
              <SliderHeader
                title={"По категориям"}
                pathTo={"pages/home/bonuses"}
              />
              <ScrollView horizontal>
                <Box p={2}>
                  <OrganizationCard type="variant1"  />
                </Box>
                <Box p={2}>
                <OrganizationCard type="variant1"  />
                </Box>
                <Box p={2}>
                <OrganizationCard type="variant1"  />
                </Box>
              </ScrollView>
            </>
             
           
              
         
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
        <TabsMenuTwoItems
          label1={"Опросы"}
          label2={"Организации"}
          handleOnChange={handleChange}
          initValue={state}
        />
      </Box>
      <VStack style={{ paddingLeft: 20, paddingRight: 20 }}>
        <FilterBar />
      </VStack>

      <ScrollView style={{ height: 600, width: "100%" }}>
        <Center>{handleGetContent(state)}</Center>
      </ScrollView>
    </VStack>
  );
}

export default All;

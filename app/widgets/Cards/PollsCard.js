import React from "react";
import { Box, HStack, VStack, Image, Text } from "native-base";
import { StyledCardsText, StyledCardsTopic, StyledCardsDate } from "@/app/settings/constants/TextConstants";
import ButtonPrimary from "@/app/shared/Buttons/ButtonPrimary";
import { styles } from "@/app/settings/constants/PollsCardStylesConstants";
import Bonus from "../../shared/Bonus/Bonus";

const PollsCard = ({ logo, type, topic, text, date, votesNumb, questionsNumb, orgName }) => {

  const getWidth = () => {
    switch (type) {
      case "variant2":
        return "340px";
      case "variant3":
        return "352px";
      default:
        return "190px";
    }
  };

  return (
    <Box {...styles.box} style={{ boxShadow: "0px 2px 10px 0px #00000040" }} height={type === "variant2" ? "114px" : "178px"} 
    width={getWidth()}>
      {type === "default" && 
      <Box {...styles.imageHeaderBox}>
        <Image
          source={require('../../settings/images/polls-card-header.png')}
          alt="Polls Card Header"
          width="196px"
          height="64px"
          resizeMode="contain"
        />
      </Box>}

      {type === "variant3" && 
      <Box {...styles.imageHeaderBox} borderBottomWidth="1px" borderBottomColor="#d3d3d3">
        <HStack width="100%">
          <Box flex={1} justifyContent="center" alignItems="center" borderRightWidth="1px" borderRightColor="#d3d3d3">
            <HStack alignItems="center" pl={2} width="100%">
              <Image
                source={logo}
                alt="Organization Logo"
                width="50px"
                height="50px"
                resizeMode="contain"
              />
              <Box flex={1} ml={2}>
                <Text {...styles.text} numberOfLines={1} ellipsizeMode="tail" style={{ flexShrink: 1 }}>
                  {orgName}
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Image
              source={require('../../settings/images/polls-card-header.png')}
              alt="Polls Card Header"
              width="100%"
              height="100%"
            />
          </Box>
        </HStack>
      </Box>}

      <Box {...styles.middleBox}>
        <VStack>
          <HStack justifyContent="space-between" alignItems="center" width="100%">
            <StyledCardsTopic>{topic}</StyledCardsTopic>
            <Bonus />
          </HStack>
          <VStack mt="2">
            <StyledCardsText>{text}</StyledCardsText>
            <StyledCardsDate>{date}</StyledCardsDate>
          </VStack>
        </VStack>
      </Box>

      <Box {...styles.bottomBox}>
        <HStack alignItems="center" width="100%" mt="auto" mb={2}>
          {type === "variant2" ? (
            <Text fontSize="10" color="gray.500" flex={1} textAlign="left">
              {votesNumb} голосов {questionsNumb} вопросов
            </Text>
          ) : (
            <Text fontSize="10" color="gray.500" flex={1} textAlign="left">
              {votesNumb} голосов
            </Text>
          )}
          <ButtonPrimary text="Пройти" type="pollsCardVariant" />
        </HStack>
      </Box>
    </Box>
  );
};

export default PollsCard;

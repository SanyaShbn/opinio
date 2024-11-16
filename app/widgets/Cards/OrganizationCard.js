import React from "react";
import { Box, HStack, VStack, Text } from "native-base";
import { StyledCardsText, StyledCardsTopic, StyledCardsDescription } from "@/app/settings/constants/TextConstants";
import ButtonPrimary from "@/app/shared/Buttons/ButtonPrimary";
import ButtonSecondary from "@/app/shared/Buttons/ButtonSecondary";

const OrganizationCard = ({ type, topic, text, description, surveysNumb, topicsNumb }) => {
  let width = 225;
  let height = 125;

  if (type === 'variant2' || type === 'variant3') {
    width = 362;
    height = 100;
  }

  return (
    <Box
      bg="white"
      py="2"
      px="3"
      borderRadius="10"
      width={width}
      height={height}
      maxWidth="100%"
      shadow={8}
      elevation={5}
    >
      <VStack justifyContent="space-between" height="100%" flex={1}>
        <VStack>
          <StyledCardsTopic>{topic}</StyledCardsTopic>
          <StyledCardsText>{text}</StyledCardsText>
        </VStack>
        {(type === 'variant2' || type === 'variant3') && (
          <VStack mt="2">
            <StyledCardsDescription>{description}</StyledCardsDescription>
          </VStack>
        )}
        <HStack alignItems="center" width="100%" mt="auto" mb={2}>
          <Text fontSize="10" color="gray.500" flex={1} textAlign="left">
            {surveysNumb} опросов | {topicsNumb} тем
          </Text>
          {type === "variant3" ? (
            <HStack space={4}>
              <ButtonPrimary text="Обзор" type={type} />
              <ButtonSecondary text="Отписаться" />
            </HStack>
          ) : (
            <ButtonPrimary text="Обзор" type="default" />
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default OrganizationCard;

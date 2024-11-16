import React from "react";
import { Box, HStack, VStack, Text, Image } from "native-base";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";
import { profileComponentTextStyles } from "@/app/settings/constants/TextConstants";

const Profile = ({ title, logo, discussions, surveys, followers, description, buttonText }) => {
  return (
    <Box
      width="402px"
      height="120px"
      paddingX="20px"
      paddingY="0px"
      gap="5px"
      opacity="1"
      bg="transparent"
    >
      <VStack space="2">
        <Text style={profileComponentTextStyles.title}>
          {title}
        </Text>
        <HStack space="10px" alignItems="center">
          <Image
            source={logo}
            alt="Organization Logo"
            width="50px"
            height="50px"
            opacity="1"
          />
          <HStack space="10px" alignItems="flex-start">
            <VStack alignItems="center">
              <Text style={profileComponentTextStyles.content}>
                Обсуждений
              </Text>
              <Text style={[profileComponentTextStyles.content, { marginTop: 10 }]}>
                {discussions}
              </Text>
            </VStack>
            <VStack alignItems="center">
              <Text style={profileComponentTextStyles.content}>
                Опросов
              </Text>
              <Text style={[profileComponentTextStyles.content, { marginTop: 10 }]}>
                {surveys}
              </Text>
            </VStack>
            <VStack alignItems="center">
              <Text style={profileComponentTextStyles.content}>
                Подписчиков
              </Text>
              <Text style={[profileComponentTextStyles.content, { marginTop: 10 }]}>
                {followers}
              </Text>
            </VStack>
          </HStack>
        </HStack>

        <HStack justifyContent="space-between" alignItems="center" width="100%">
          <Text style={profileComponentTextStyles.description}>
            {description}
          </Text>
          <Box flex={1} alignItems="flex-end" pr="100px">
            <ButtonSecondary text={buttonText}/>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Profile;

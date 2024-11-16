
import React, { useState } from 'react';
import { Box, Center, VStack, HStack, Icon, Pressable } from 'native-base';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { StyledHeaderText } from '@/app/settings/constants/TextConstants';
import { background } from '@/app/settings/constants/Colors';


const HeaderBottom = () => {
  const [pressedIcon, setPressedIcon] = useState<string | null>(null);

  const handlePressIn = (iconName: string) => {
    setPressedIcon(iconName);
  };

  const handlePressOut = () => {
    setPressedIcon(null);
  };

  const iconColor = (iconName: string) =>
    pressedIcon === iconName ? 'lightgrey' : 'white';

  return (
    <Box
      position="absolute"
      bottom={0}
      width="100%"
      height="100px"
      bg={background}
      pb="10px"
      borderRadius="10px 0px 0px 0px"
      justifyContent="center"
      alignItems="center"
      safeAreaBottom
    >
      <Center mt={4}>
        <HStack space={8} justifyContent="space-around" alignItems="center" width="90%">
          <Pressable
            onPressIn={() => handlePressIn('home')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="home" color={iconColor('home')} size="xl" mb={1} />
              <StyledHeaderText>Главная</StyledHeaderText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('history')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="history" color={iconColor('history')} size="xl" mb={1} />
              <StyledHeaderText>История</StyledHeaderText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('notifications')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={MaterialIcons} name="notifications" color={iconColor('notifications')} size="xl" mb={1} />
              <StyledHeaderText>Уведомления</StyledHeaderText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('profile')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="user-circle" color={iconColor('profile')} size="xl" mb={1} />
              <StyledHeaderText>Профиль</StyledHeaderText>
            </VStack>
          </Pressable>
        </HStack>
      </Center>
    </Box>
  );
};

export default HeaderBottom;

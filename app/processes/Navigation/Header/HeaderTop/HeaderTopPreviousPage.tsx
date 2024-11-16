import React, { useState } from 'react';
import { Box, HStack, Icon, Pressable, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { background } from '../../../../settings/constants/Colors';

const HeaderTopPreviousPage = () => {
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
      top={0}
      width="100%"
      height="70px"
      bg={background}
      pb="10px"
      justifyContent="center"
      safeAreaTop
    >
      <HStack alignItems="center" justifyContent="center" px={4}>
        <Pressable
          onPressIn={() => handlePressIn('back')}
          onPressOut={handlePressOut}
          mr={6}
        >
          <Icon as={Ionicons} name="arrow-back" color={iconColor('back')} size="xl" />
        </Pressable>
        <Text style={{
          fontFamily: 'Roboto',
          fontSize: 24,
          fontWeight: '500',
          lineHeight: 24,
          textAlign: 'center',
          color: 'white',
        }}>
          Opinio: Название страницы
        </Text>
      </HStack>
    </Box>
  );
};

export default HeaderTopPreviousPage;

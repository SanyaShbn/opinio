import React, { useState } from 'react';
import { Box, HStack, Icon, Pressable, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { background } from '../../../../settings/constants/Colors';

const HeaderTopClose = () => {
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
      <HStack alignItems="center" justifyContent="space-between" px={4} width="100%">
        <Pressable
          onPressIn={() => handlePressIn('close')}
          onPressOut={handlePressOut}
        >
          <Icon as={MaterialIcons} name="close" color={iconColor('close')} size="xl" />
        </Pressable>
        <Text style={{
          fontFamily: 'Roboto',
          fontSize: 24,
          fontWeight: '500',
          lineHeight: 24,
          textAlign: 'center',
          color: 'white',
          position: 'absolute',
          left: '45%',
        }}>
          Opinio
        </Text>
        <Box width="24px" />
      </HStack>
    </Box>
  );
};

export default HeaderTopClose;

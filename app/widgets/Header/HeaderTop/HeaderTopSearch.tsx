import React, { useState } from 'react';
import { Box, HStack, Icon, Pressable, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { background } from '../../../settings/constants/Colors'; // Adjust the path as necessary

const HeaderTopSearch = () => {
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
        <Text style={{
          fontFamily: 'Roboto',
          fontSize: 24,
          fontWeight: '500',
          lineHeight: 24,
          textAlign: 'left',
          color: 'white',
        }}>
          Opinio
        </Text>
        <Pressable
          onPressIn={() => handlePressIn('search')}
          onPressOut={handlePressOut}
          onPress={() => console.log('Search pressed')} // Replace with actual search function
        >
          <Icon as={Ionicons} name="search" color={iconColor('search')} size="xl" />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default HeaderTopSearch;

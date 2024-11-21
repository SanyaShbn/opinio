import React, { useState } from 'react';
import { Box, HStack, Icon, Pressable, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { background } from '../../../../settings/constants/Colors';
import { Stack } from 'expo-router';

const HeaderTopPreviousPage = ({name, title}) => {
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



      
        <Stack.Screen
          name={name}
          options={{
            headerLeft: () =>  <Pressable
            onPressIn={() => handlePressIn('back')}
            onPressOut={handlePressOut}
            mr={6}
          >
            <Icon as={Ionicons} name="arrow-back" color={iconColor('back')} size="xl" />
          </Pressable>,
            headerTitle: () =>  <Text style={{
              fontFamily: 'Roboto',
              fontSize: 24,
              fontWeight: '500',
              lineHeight: 24,
              textAlign: 'center',
              color: 'white',
            }}>
              Opinio: {title}
            </Text>,
     
          }}
        />


    
  );
};

export default HeaderTopPreviousPage;

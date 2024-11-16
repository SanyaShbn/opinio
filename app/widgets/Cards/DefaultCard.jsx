import React from 'react';
import { Box, HStack, VStack, Text, Pressable } from 'native-base';

import { StyledCardsText, StyledCardsTopic } from '@/app/settings/constants/TextConstants';
import { buttonColor } from '@/app/settings/constants/Colors';

const DefaultCard = () => {
    return (
        <Box bg="white" py="4" px="3" borderRadius="10" rounded="md" width={225} height={125} maxWidth="100%">
          <HStack justifyContent="space-between" height="100%">
            <VStack justifyContent="space-between" flex={1}>
              <VStack>
                <StyledCardsTopic>
                    Медицина
                </StyledCardsTopic>
                <StyledCardsText>
                    Название организации
                </StyledCardsText>
              </VStack>
              <HStack justifyContent="space-between" alignItems="center" width="100%">
                <Text fontSize="sm" color="gray.500">
                  10 опросов | 20 тем
                </Text>
                <Pressable
                  rounded='4px'
                  bg={buttonColor} 
                  width={53} 
                  height={31} 
                  justifyContent="center" 
                  alignItems="center">
                  <Text color="white">
                    Обзор
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </HStack>
        </Box>
    );
}

export default DefaultCard;
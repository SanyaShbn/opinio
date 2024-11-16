import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface StyledTextProps {
  children: ReactNode;
}

const baseTextStyle = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontWeight: '500'
  } as TextStyle,
});

const headerTextStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  } as TextStyle,
});

const cardsTextStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'left',
    color: 'black',
  } as TextStyle,
});

const cardsTopicStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 12,
    textAlign: 'left',
    color: '#232690',
  } as TextStyle,
});

export const StyledHeaderText: React.FC<StyledTextProps> = ({ children }) => {
  return <Text style={headerTextStyle.text}>{children}</Text>;
};

export const StyledCardsText: React.FC<StyledTextProps> = ({ children }) => {
  return <Text style={cardsTextStyle.text}>{children}</Text>;
};

export const StyledCardsTopic: React.FC<StyledTextProps> = ({ children }) => {
  return <Text style={cardsTopicStyle.text}>{children}</Text>;
};
import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';


const baseTextStyle = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontWeight: '500'
  } ,
});

const headerTextStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  } ,
});

const cardsTextStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'left',
    color: 'black',
  } ,
});

const cardsTopicStyle = StyleSheet.create({
  text: {
    ...baseTextStyle.text,
    fontSize: 12,
    textAlign: 'left',
    color: '#232690',
  } ,
});

export const StyledHeaderText = ({ children }) => {
  return <Text style={headerTextStyle.text}>{children}</Text>;
};

export const StyledCardsText = ({ children }) => {
  return <Text style={cardsTextStyle.text}>{children}</Text>;
};

export const StyledCardsTopic = ({ children }) => {
  return <Text style={cardsTopicStyle.text}>{children}</Text>;
};
import { StyleSheet } from 'react-native';
import { tabsDefaultColor, tabsActiveDefaultColor, tabsActiveSecondVariantColor } from './Colors';

export const tabsStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 50,
    },
    menuItem: {
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: tabsDefaultColor,
    },
    activeText: {
      color: tabsActiveDefaultColor,
      textShadowColor: '#00000040',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 6,
    },
    underline: {
      height: 2,
      backgroundColor: tabsActiveDefaultColor,
      width: '120%',
      marginTop: 4,
    },
    activeItem: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
    },
  });

  export const tabsStylesSecondVariant = StyleSheet.create({
    ...tabsStyles,
    activeText: {
      color: tabsActiveSecondVariantColor,
      textShadowColor: '',
    },
    underline: {
      height: 2,
      backgroundColor: tabsActiveSecondVariantColor,
      width: '120%',
      marginTop: 4,
    },
    activeItem: {
      shadowColor: '',
    },
  });
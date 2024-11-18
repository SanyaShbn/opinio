import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { secondaryButtonColor } from "../../settings/constants/Colors";


const ButtonSecondary = ({ text, type = "default" }) => {
  const [isPressed, setIsPressed] = useState(false);

  const getType = (type, isPressed) => {
    switch (type) {
      case "bonusPostVariant":
        return isPressed ? [variant2Styles.button, variant2Styles.pressed] : [variant2Styles.button];
      case "closePollModalVariant":
        return isPressed ? [closePollModalVariant.button, closePollModalVariant.pressed] : [closePollModalVariant.button];
      case "userProfileModalVariant":
        return isPressed ? [userProfileModalVariant.button, userProfileModalVariant.pressed] : [userProfileModalVariant.button];
      default:
        return isPressed ? [defaultStyles.button, defaultStyles.pressed] : [defaultStyles.button];
    }
  };

  const getTextStyle = (type) => {
    switch (type) {
      case "bonusPostVariant":
        return variant2Styles.text;
      case "closePollModalVariant":
        return closePollModalVariant.text;  
      case "userProfileModalVariant":
        return userProfileModalVariant.text;    
      default:
        return defaultStyles.text;
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={getType(type, isPressed)}
    >
      <Text style={getTextStyle(type)}>{text}</Text>
    </Pressable>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: secondaryButtonColor,
    width: 80,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  pressed: {
    backgroundColor: secondaryButtonColor,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 10,
    color: "white",
  }
});

const variant2Styles = StyleSheet.create({
    ...defaultStyles,
    button: {
      backgroundColor: secondaryButtonColor,
      width: 90,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
    },
    text: {
      fontFamily: "Roboto",
      fontSize: 16,
      color: "white",
    },
});

const closePollModalVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryButtonColor,
    width: 49,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "white",
  },
});

const userProfileModalVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryButtonColor,
    width: 69,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "white",
  },
});

export default ButtonSecondary;

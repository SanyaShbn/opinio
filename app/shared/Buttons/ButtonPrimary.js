import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { primaryButtonColor } from "@/app/settings/constants/Colors";

const ButtonPrimary = ({ text, type }) => {
  const [isPressed, setIsPressed] = useState(false);

  const getType = (type, isPressed) => {
    switch (type) {
      case "variant3":
        return isPressed ? [variant3Styles.button, variant3Styles.pressed] : [variant3Styles.button];
      case "pollsCardVariant":
        return isPressed ? [pollsCardVariant.button, pollsCardVariant.pressed] : [pollsCardVariant.button];
      default:
        return isPressed ? [defaultStyles.button, defaultStyles.pressed] : [defaultStyles.button];
    }
  };

  const getTextStyle = (type) => {
    switch (type) {
      case "variant3":
        return variant3Styles.text;
      case "pollsCardVariant":
        return pollsCardVariant.text;
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
    backgroundColor: primaryButtonColor,
    width: 74,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  pressed: {
    backgroundColor: primaryButtonColor,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

const variant3Styles = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: primaryButtonColor,
    width: 53,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontSize: 10,
    color: "white",
  },
});

const pollsCardVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: primaryButtonColor,
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default ButtonPrimary;

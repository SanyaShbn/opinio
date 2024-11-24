import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { secondaryColor } from "../../settings/constants/Colors";


const ButtonPrimary = ({ text, type = "default", onPress={}}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getType = (type, isPressed) => {
    switch (type) {
      case "variant3":
        return isPressed ? [variant3Styles.button, variant3Styles.pressed] : [variant3Styles.button];
      case "pollsCardVariant" && "bonusPostVariant":
        return isPressed ? [pollsCardVariant.button, pollsCardVariant.pressed] : [pollsCardVariant.button];
      case "closePollModalVariant":
        return isPressed ? [closePollModalVariant.button, closePollModalVariant.pressed] : [closePollModalVariant.button];
      case "pollsCreationSettingsVariant":
        return isPressed ? [pollsCreationSettingsVariant.button, pollsCreationSettingsVariant.pressed] : [pollsCreationSettingsVariant.button];
      case "pollsCompletingVariant":
        return isPressed ? [pollsCompletingVariant.button, pollsCompletingVariant.pressed] : [pollsCompletingVariant.button];
      case "confirmPollsCompletionVariant":
        return isPressed ? [confirmPollsCompletionVariant.button, confirmPollsCompletionVariant.pressed] : [confirmPollsCompletionVariant.button];
      default:
        return isPressed ? [defaultStyles.button, defaultStyles.pressed] : [defaultStyles.button];
    }
  };

  const getTextStyle = (type) => {
    switch (type) {
      case "variant3":
        return variant3Styles.text;
      case "pollsCardVariant" && "bonusPostVariant":
        return pollsCardVariant.text;
      case "closePollModalVariant":
        return closePollModalVariant.text;
      case "pollsCreationSettingsVariant":
        return pollsCreationSettingsVariant.text;
      case "pollsCompletingVariant":
        return pollsCompletingVariant.text;
      case "confirmPollsCompletionVariant":
        return confirmPollsCompletionVariant.text;
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
      onPress={onPress}
    >
      <Text style={getTextStyle(type)}>{text}</Text>
    </Pressable>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: secondaryColor,
    width: 74,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  pressed: {
    backgroundColor: secondaryColor,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "white",
  },
});

const variant3Styles = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 53,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 10,
    color: "white",
  },
});

const pollsCardVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

const closePollModalVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 66,
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

const pollsCreationSettingsVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 200,
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

const pollsCompletingVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 165,
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

const confirmPollsCompletionVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: secondaryColor,
    width: 360,
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

export default ButtonPrimary;

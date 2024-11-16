import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { secondaryButtonColor } from "@/app/settings/constants/Colors";

const ButtonSecondary = ({ text }) => {
  const [isPressed, setIsPressed] = useState(false);

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
      style={[defaultStyles.button, isPressed && defaultStyles.pressed]}
    >
      <Text style={defaultStyles.text}>{text}</Text>
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
    fontSize: 10,
    color: "white",
  },
});

export default ButtonSecondary;

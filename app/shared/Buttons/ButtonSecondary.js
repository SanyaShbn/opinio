import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { specificColor, primaryColor, mainColor } from "../../settings/constants/Colors";
import { Link } from "expo-router";


const ButtonSecondary = ({ text, type = "default", onPress = () => {} }) => {
  const [isPressed, setIsPressed] = useState(false);

  const getType = (type, isPressed) => {
    switch (type) {
      case "bonusPostVariant":
        return isPressed ? [variant2Styles.button, variant2Styles.pressed] : [variant2Styles.button];
      case "closePollModalVariant":
        return isPressed ? [closePollModalVariant.button, closePollModalVariant.pressed] : [closePollModalVariant.button];
      case "userProfileModalVariant":
        return isPressed ? [userProfileModalVariant.button, userProfileModalVariant.pressed] : [userProfileModalVariant.button];
      case "pollsCreationSettingsVariant":
        return isPressed ? [pollsCreationSettingsVariant.button, pollsCreationSettingsVariant.pressed] : [pollsCreationSettingsVariant.button];
      case "pollsCompletingVariant":
        return isPressed ? [pollsCompletingVariant.button, pollsCompletingVariant.pressed] : [pollsCompletingVariant.button];  
      case "getStartedButton":
         return isPressed ? [getStartedButton.button, getStartedButton.pressed] : [getStartedButton.button];  
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
      case "pollsCreationSettingsVariant":
        return pollsCreationSettingsVariant.text;  
      case "pollsCompletingVariant":
        return pollsCompletingVariant.text;  
      case "getStartedButton":
        return getStartedButton.text;  
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

  const getText=(type,text)=>{

    switch (type) {
      case "bonusPostVariant":
       return  <Text style={getTextStyle(type)}>{text}</Text>
      case "closePollModalVariant":
        return  <Text style={getTextStyle(type)}>{text}</Text>
      case "userProfileModalVariant":
        return  <Text style={getTextStyle(type)}>{text}</Text>
      case "getStartedButton":
        return   <Link href={"pages/getstarted/role/Role"}>
        <Text style={getTextStyle(type)}>{text}</Text>
     </Link>
      default:
        return defaultStyles.text;
    }

  }

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={getType(type, isPressed)}
      onPress={onPress}
    >
      {getText(type, text)}
    </Pressable>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: specificColor,
    width: 80,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  pressed: {
    backgroundColor: specificColor,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    // fontFamily: "Roboto",
    fontSize: 10,
    color: mainColor,
  }
});

const variant2Styles = StyleSheet.create({
    ...defaultStyles,
    button: {
      backgroundColor: specificColor,
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
    backgroundColor: specificColor,
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
    backgroundColor: specificColor,
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

const pollsCreationSettingsVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: primaryColor,
    width: 360,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  pressed: {
    backgroundColor: primaryColor,
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

const pollsCompletingVariant = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: specificColor,
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

const getStartedButton = StyleSheet.create({
  ...defaultStyles,
  button: {
    backgroundColor: specificColor,
    width: 224,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "white",
  },
});

export default ButtonSecondary;

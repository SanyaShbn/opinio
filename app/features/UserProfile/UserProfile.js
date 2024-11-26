import React from "react";
import { Box, Text, Avatar, Pressable, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../settings/constants/UserProfileStylesConstants";
import { defaultGrey } from "../../settings/constants/Colors";
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary";
import statusTypes from "../../processes/store/constants/statusTypes";

const UserProfile = ({ userName = "Пользователь", userLogin = "Логин пользователя", userOccupation = "Род деятельности",
   type = "default", onPress={...console.log("Button is pressed...")}, role }) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.avatarContainer}>
        <Avatar size="72px" bg={defaultGrey} />
      </Box>
      {type === "default" ? (
        <Box style={styles.textContainer}>
          <Text style={styles.userNameText}> {role==statusTypes.user ? "Здравствуйте" : "Добро пожаловать"}</Text>
          <Text>{userName}</Text>
        </Box>
      ) : (
        <Box style={styles.textContainerVariant2}>
          <Box style={styles.subContainer}>
            <Text style={styles.userNameText}>{userLogin}</Text>
          </Box>
          <Box style={styles.subContainer}>
            <Text style={styles.userOccupationText}>{userOccupation}</Text>
          </Box>
        </Box>
      )}
      {type === "default" ? (
        <Box style={styles.iconContainer}>
          <Pressable _pressed={{ opacity: 0.7 }}>
            <MaterialIcons name="settings" size={38} color={defaultGrey} />
          </Pressable>
        </Box>
      ) : (
        <ButtonSecondary text="Убрать" type="userProfileModalVariant" onPress={onPress}/>
      )}
    </Box>
  );
};

export default UserProfile;

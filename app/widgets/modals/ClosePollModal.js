import React from "react";
import { Box, Text, Pressable } from "native-base";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from "../../settings/constants/ClosePollModalStylesConstants";
import { defaultGrey } from "../../settings/constants/Colors";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary"
import ButtonSecondary from "../../shared/Buttons/ButtonSecondary"

const ClosePollModal = ( {messageText} ) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.topContainer}>
        <Box style={styles.leftContainer}>
          <Text style={styles.titleText}>Внимание!</Text>
        </Box>
        <Box style={styles.rightContainer}>
          <Pressable>
            <MaterialCommunityIcons name="close-thick" size={22} color={defaultGrey}/>
          </Pressable>
        </Box>
      </Box>
      <Box style={styles.middleContainer}>
        <Box style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {messageText}
          </Text>
        </Box>
      </Box>
      <Box style={styles.bottomContainer}>
        <ButtonSecondary text="Да" type="closePollModalVariant"/>
        <ButtonPrimary text="Нет" type="closePollModalVariant"/>
      </Box>
    </Box>
  );
};

export default ClosePollModal;

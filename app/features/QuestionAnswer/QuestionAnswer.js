import React, { useState } from "react";
import { Box, Text, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../settings/constants/QuestionAnswerStylesConstants";

const QuestionAnswer = () => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <Box
      style={[
        styles.container,
        selected && styles.containerSelected
      ]}
    >
      <Box style={styles.textContainer}>
        <Text style={[styles.text, selected && styles.textSelected]}>
          Вариант ответа
        </Text>
      </Box>
      <Pressable onPress={handlePress}>
        <Box style={[styles.circle, selected && styles.circleSelected]}>
          {selected && (
            <MaterialIcons name="check" size={16} color="#FFFFFF" />
          )}
        </Box>
      </Pressable>
    </Box>
  );
};

export default QuestionAnswer;

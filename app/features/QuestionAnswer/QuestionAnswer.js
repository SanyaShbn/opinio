import React from "react";
import { Box, Input, Pressable, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../settings/constants/QuestionAnswerStylesConstants";

const QuestionAnswer = ({ answerVariant = "", isEditable = false, selected, onSelect, onDelete, onChangeText }) => {
  return (
    <Box style={[
      styles.container,
      selected && styles.containerSelected
    ]}>
      <Pressable onPress={onSelect} style={styles.textContainer}>
        {isEditable ? (
          <Input
            variant="unstyled"
            style={{ fontFamily: "Roboto", fontSize: 16, color: selected ? '#FFFFFF' : '#000000' }}
            value={answerVariant}
            onChangeText={onChangeText}
            placeholder="Вариант ответа"
          />
        ) : (
          <Text style={[styles.text, selected && styles.textSelected]}>{answerVariant}</Text>
        )}
      </Pressable>
      {isEditable ? (
        <Pressable onPress={onDelete}>
          <MaterialIcons name="delete" size={24} color="#E96AA8" />
        </Pressable>
      ) : (
        <Pressable onPress={onSelect}>
        <Box style={[styles.circle, selected && styles.circleSelected]}>
          {selected && <MaterialIcons name="check" size={16} color="#FFFFFF" />}
        </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default QuestionAnswer;
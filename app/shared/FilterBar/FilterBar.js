import React from "react";
import { Box, Text, HStack, Pressable } from "native-base";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../settings/constants/FilterBarStylesConstants";
import {background} from "../../settings/constants/Colors";

const FilterBar = () => {
  return (
    <Box {...styles.container}>
      <HStack space={10}>
        <Pressable _pressed={{ opacity: 0.7 }}>
          <Box {...styles.innerContainer}>
            <FontAwesome name="filter" size={16} color={background} />
            <Text style={styles.text}>Фильтр</Text>
          </Box>
        </Pressable>
        <Pressable _pressed={{ opacity: 0.7 }}>
          <Box {...styles.innerContainerWide}>
            <MaterialCommunityIcons name="sort" size={16} color={background} />
            <Text style={styles.text}>Сортировка</Text>
          </Box>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default FilterBar;

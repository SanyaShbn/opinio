import React, { useState, useEffect } from "react";
import { Box, Text, HStack, Pressable, Modal, Button, Input, Select } from "native-base";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../settings/constants/FilterBarStylesConstants";
import { background } from "../../settings/constants/Colors";

const FilterBar = () => {
  const [sortState, setSortState] = useState(0); // 0: none, 1: asc, 2: desc
  const [sortText, setSortText] = useState("Сортировка");
  const [sortIcon, setSortIcon] = useState("sort");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filterField, setFilterField] = useState("");
  const [filterCondition, setFilterCondition] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const toggleSort = () => {
    setSortState((prevState) => (prevState + 1) % 3);
  };

  useEffect(() => {
    switch (sortState) {
      case 1:
        setSortText("По возрастанию");
        setSortIcon("sort-ascending");
        break;
      case 2:
        setSortText("По убыванию");
        setSortIcon("sort-descending");
        break;
      default:
        setSortText("Сортировка");
        setSortIcon("sort");
        break;
    }
  }, [sortState]);

  return (
    <Box {...styles.container}>
      <HStack space={10}>
        <Pressable onPress={() => setFilterModalVisible(true)} _pressed={{ opacity: 0.7 }}>
          <Box {...styles.filterContainer}>
            <FontAwesome name="filter" size={16} color={background} />
            <Text style={styles.text}>Фильтр</Text>
          </Box>
        </Pressable>
        <Pressable onPress={toggleSort} _pressed={{ opacity: 0.7 }}>
          <Box {...styles.sortingContainer}>
            <MaterialCommunityIcons name={sortIcon} size={16} color={background} />
            <Text style={styles.text}>{sortText}</Text>
          </Box>
        </Pressable>
      </HStack>

      <Modal isOpen={filterModalVisible} onClose={() => setFilterModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Фильтр</Modal.Header>
          <Modal.Body>
            <Select
              mt={1}
              mb={3}
              selectedValue={filterField}
              minWidth={200}
              placeholder="Выберите поле"
              onValueChange={(value) => setFilterField(value)}
            >
              <Select.Item label="Поле 1" value="field1" />
              <Select.Item label="Поле 2" value="field2" />
              <Select.Item label="Поле 3" value="field3" />
            </Select>
            <Select
              mt={1}
              mb={3}
              selectedValue={filterCondition}
              minWidth={200}
              placeholder="Выберите условие"
              onValueChange={(value) => setFilterCondition(value)}
            >
              <Select.Item label="Равно" value="equals" />
              <Select.Item label="Содержит" value="contains" />
              <Select.Item label="Начинается с" value="starts_with" />
            </Select>
            <Input
              mt={1}
              mb={3}
              placeholder="Значение"
              value={filterValue}
              onChangeText={(text) => setFilterValue(text)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setFilterModalVisible(false)}>Применить</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default FilterBar;

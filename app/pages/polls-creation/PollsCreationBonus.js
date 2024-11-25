import React, { useState, useEffect } from "react";
import { Box, Center, ScrollView, Text, Modal } from "native-base";
import { styles } from "../../settings/constants/polls-creation-styles/PollsCreationBonusStyles";
import BonusPost from "../../widgets/Posts/BonusPost";
import BonusModal from "../../widgets/modals/BonusModal";

const PollsCreationBonus = () => {
  const [bonusData, setBonusData] = useState([]);
  const [chosenBonusNumb, setChosenBonusNumb] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    // Загрузка данных с сервера
    const fetchData = async () => {
      // Здесь вы будете получать данные с сервера
      const data = [
        { id: 1, bonusName: "Бонус 1", orgName: "Организация 1", type: "variant2" },
        { id: 2, bonusName: "Бонус 2", orgName: "Организация 2", type: "variant2" },
        // Добавьте еще 4 элемента для полного заполнения данных
      ];
      setBonusData(data);
      setChosenBonusNumb(data.filter(item => item.type === "variant3").length);
    };
    fetchData();
  }, []);

  const handleTypeChange = (id, newType) => {
    setBonusData(prevData => {
      const updatedData = prevData.map(item =>
        item.id === id ? { ...item, type: newType } : item
      );
      setChosenBonusNumb(updatedData.filter(item => item.type === "variant3").length);
      return updatedData;
    });
  };

  return (
    <Box style={styles.container}>
      <Box style={{ width: "100%", height: 39, paddingLeft: 30, gap: 10 }}>
        <Text style={{
          fontFamily: "Roboto",
          fontSize: 18,
          fontWeight: "bold",
          lineHeight: 24,
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          textAlign: "left"
        }}>Отобрано: {chosenBonusNumb}</Text>
      </Box>
      <ScrollView>
        {bonusData.map((bonus, index) => (
          <Box key={index} style={styles.bonusPostContainer}>
            <BonusPost {...bonus} onTypeChange={handleTypeChange} onBonusPress={toggleModalVisibility} />
          </Box>
        ))}
      </ScrollView>

      {isModalVisible && <Box style={styles.overlay} />}
      <Center styles={styles.modalContent}>
        <Modal isOpen={isModalVisible} onClose={toggleModalVisibility}>
            <BonusModal isOpen={isModalVisible} onClose={toggleModalVisibility}/>
        </Modal>
      </Center>
    </Box>
  );
};

export default PollsCreationBonus;
import React, { useState, useEffect } from "react";
import { Box, Text } from "native-base";
import { styles } from "../../settings/constants/BonusPostStylesConstants";
import Bonus from "../../shared/Bonus/Bonus";
import ButtonPrimary from "./../../shared/Buttons/ButtonPrimary";
import ButtonSecondary from "./../../shared/Buttons/ButtonSecondary";

const BonusPost = ({ id, bonusName = "Название награды", orgName = "Название организации", type = "default", onTypeChange=()=>{}, onBonusPress }) => {
  const [currentType, setCurrentType] = useState(type);

  useEffect(() => {
    onTypeChange(id, currentType);
  }, [currentType]);

  const handlePress = () => {
    if (currentType === "variant2") {
      setCurrentType("variant3");
    } else if (currentType === "variant3") {
      setCurrentType("variant2");
    }
  };

  return (
    <Box {...(currentType === "default" ? styles.defaultBox : styles.variantTwoAndThreeBox)}>
      <Box {...styles.headerBox}>
        <Bonus onPress={onBonusPress}/>
      </Box>

      <Box {...styles.middleBox}>
        <Text {...styles.bonusNameText}>{bonusName}</Text>
      </Box>

      {currentType === "default" && 
      <Box {...styles.bottomBoxDefault}>
        <Text {...styles.orgNameText}>{orgName}</Text>
      </Box>}

      {currentType === "variant2" && 
      <Box {...styles.bottomBoxVariantTwoAndThree}>
        <ButtonPrimary text="Добавить" type="bonusPostVariant" onPress={handlePress} />
      </Box>}

      {currentType === "variant3" && 
      <Box {...styles.bottomBoxVariantTwoAndThree}>
        <ButtonSecondary text="Убрать" type="bonusPostVariant" onPress={handlePress} />
      </Box>}
    </Box>
  );
};

export default BonusPost;
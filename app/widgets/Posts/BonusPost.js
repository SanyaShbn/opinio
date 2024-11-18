import React from "react";
import { Box, Text } from "native-base";
import { styles } from "@/app/settings/constants/BonusPostStylesConstants";
import Bonus from "../../shared/Bonus/Bonus";
import ButtonPrimary from "@/app/shared/Buttons/ButtonPrimary";
import ButtonSecondary from "@/app/shared/Buttons/ButtonSecondary";

const BonusPost = ({ bonusName, orgName = "Название организации", type = "default" }) => {
  return (
    <Box {...(type === "default" ? styles.defaultBox : styles.variantTwoAndThreeBox)}>
      <Box {...styles.headerBox}>
        <Bonus/>
      </Box>

      <Box {...styles.middleBox}>
          <Text {...styles.bonusNameText}>{bonusName}</Text>
      </Box>

      {type === "default" && 
      <Box {...styles.bottomBoxDefault}>
          <Text {...styles.orgNameText}>{orgName}</Text>
      </Box>}

      {type === "variant2" && 
      <Box {...styles.bottomBoxVariantTwoAndThree}>
          <ButtonPrimary text="Добавить" type="bonusPostVariant"/>
      </Box>}

      {type === "variant3" && 
      <Box {...styles.bottomBoxVariantTwoAndThree}>
          <ButtonSecondary text="Убрать" type="bonusPostVariant"/>
      </Box>}

    </Box>
  );
};

export default BonusPost;
import React, { useEffect, useState } from "react";
import { Box, HStack, VStack, Text, Pressable, ScrollView, Image, Skeleton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../settings/constants/PostStylesConstants";
import { primaryButtonColor, defaultGrey } from "../../settings/constants/Colors";

const Post = ({ logo = require("../../settings/images/organization-logo-icon.png"), title="Название организации", subtitle="10 дней назад",
  content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", 
  comments=10, type = "default" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [variant, setVariant] = useState(type);

  useEffect(() => {
    if (logo) {
      setIsLoaded(true);
    }
  }, [logo]);

  const handleToggle = () => {
    setVariant((prevVariant) => {
      if (prevVariant === "variant3") {
        return type;
      } else {
        return "variant3";
      }
    });
  };

  return (
    <Box {...styles.box} height={variant === "variant3" ? "185px" : "114px"}>
      <Box {...styles.headerBox}>
        <HStack space="10px" alignItems="center">
          {!isLoaded ? (
            <Skeleton size="34" rounded="full" />
          ) : (
            <Image source={logo} alt="Organization Logo" width="34px" height="34px" resizeMode="contain" />
          )}
          <VStack>
            <Text {...styles.text}>{title}</Text>
            <Text {...styles.subtitle}>{subtitle}</Text>
          </VStack>
          {type === "variant2" && (
            <Box flexDirection="row" justifyContent="flex-end" flex={1}>
              <Pressable>
                <MaterialIcons name="delete" size={24} {...styles.deleteIcon} />
              </Pressable>
            </Box>
          )}
        </HStack>
      </Box>

      <Box {...styles.contentBox} height={variant === "variant3" ? "114px" : "45px"}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Text {...styles.text}>{content}</Text>
        </ScrollView>
      </Box>

      <Box {...styles.commentsBox}>
        <Box {...styles.innerCommentsBox}>
          <Text {...styles.commentText}>{comments}</Text>
          <MaterialCommunityIcons name="comment-text" size={21} color={defaultGrey} />
        </Box>
        <Pressable onPress={handleToggle}>
          <Text {...styles.text} lineHeight="14.52px" color={primaryButtonColor}>
            {variant === "variant3" ? "Скрыть" : "Подробнее"}
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Post;

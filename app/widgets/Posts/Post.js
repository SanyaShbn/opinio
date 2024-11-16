import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable, ScrollView } from "native-base";
import { styles } from "@/app/settings/constants/PostStylesConstants";
import { primaryButtonColor } from "@/app/settings/constants/Colors";

const Post = ({ logo, title, subtitle, content, comments, onReadMore, type }) => {
  return (
    <Box {...styles.box} height={type === "variant3" ? "185px" : "114px"} style={{ boxShadow: "0px 2px 10px 0px #00000040" }}>
      <Box {...styles.headerBox}>
        <HStack space="10px" alignItems="center">
          <Image
            source={logo}
            alt="Organization Logo"
            width="34px"
            height="34px"
            resizeMode="contain"
          />
          <VStack>
            <Text {...styles.text}>{title}</Text>
            <Text {...styles.subtitle}>{subtitle}</Text>
          </VStack>
          {type === "variant2" && 
          <Box flexDirection="row" justifyContent="flex-end" flex={1}>
            <Pressable>
              <Image source={require('../../settings/images/delete-icon.png')} alt="Delete Icon" {...styles.deleteIcon} />
            </Pressable>
          </Box>
          }
        </HStack>
      </Box>

      <Box {...styles.contentBox} height={type === "variant3" ? "114px" : "45px"}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Text {...styles.text}>{content}</Text>
        </ScrollView>
      </Box>

      <Box {...styles.commentsBox}>
        <Box {...styles.innerCommentsBox}>
          <Text {...styles.commentText}>{comments}</Text>
          <Image
            source={require("../../settings/images/icons8-комментарии-32.png")}
            alt="Comments Icon"
            {...styles.image}
          />
        </Box>
        <Pressable onPress={onReadMore}>
          <Text
            {...styles.text}
            lineHeight="14.52px"
            color={primaryButtonColor}
          >
            Подробнее
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Post;
import React, { useEffect } from "react";
import { Box, ScrollView } from "native-base";
import { styles } from "../../settings/constants/organization-view-styles/OrganizationViewExpandedStyles";
import Post from "../../widgets/Posts/Post";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

const OrganizationPostsViewExpanded = () => {

  const dispatch = useDispatch()

  const params = useLocalSearchParams()

  const {id, title,content,createdAt,organizationName,commentCount} = params

  const list  = useSelector(getPostComments)

  useEffect(()=>{
    dispatch()
  },[])

  return (
    <Box>
      <Box style={styles.viewedPollsCardsAndPosts}>
        <Post type={"variant2"} item={post} handleDelete={()=>{}} handleCommentCLick={()=>{}}/>
      </Box>
      <ScrollView style={styles.scrollViewContainer} background={"#76767647"}>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default OrganizationPostsViewExpanded;
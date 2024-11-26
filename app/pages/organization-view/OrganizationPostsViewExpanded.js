import React, { useEffect } from "react";
import { Box, ScrollView } from "native-base";
import { styles } from "../../settings/constants/organization-view-styles/OrganizationViewExpandedStyles";
import Post from "../../widgets/Posts/Post";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostComments,
  getPostComments,
} from "../../processes/store/slices/postsSlice";

const OrganizationPostsViewExpanded = () => {
  const dispatch = useDispatch();

  const params = useLocalSearchParams();

  const { id, title, content, createdAt, organizationName, commentCount } =
    params;

  

  // const list=[]

  useEffect(() => {
    dispatch(fetchPostComments(id));
  }, []);

  const list = useSelector(getPostComments);

  return (
    <Box>
      <Box style={styles.viewedPollsCardsAndPosts}>
        <Post
          type={"variant2"}
          item={{
            id,
            title,
            content,
            createdAt,
            organizationName,
            commentCount,
          }}
          handleDelete={() => {}}
          handleCommentCLick={() => {}}
        />
      </Box>
      <ScrollView style={styles.scrollViewContainer} background={"#76767647"}>
        {list.map((item, index) => (
          <Box key={index} style={styles.pollsCardsAndPosts}>
            <Post item={item} />
          </Box>
        ))}

      
      </ScrollView>
    </Box>
  );
};

export default OrganizationPostsViewExpanded;

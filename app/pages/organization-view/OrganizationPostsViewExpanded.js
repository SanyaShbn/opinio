import React from "react";
import { Box, ScrollView } from "native-base";
import { styles } from "../../settings/constants/organization-view-styles/OrganizationViewExpandedStyles";
import Post from "../../widgets/Posts/Post";

const OrganizationPostsViewExpanded = ({post}) => {

  return (
    <Box>
      <Box style={styles.viewedPollsCardsAndPosts}>
        <Post/>
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
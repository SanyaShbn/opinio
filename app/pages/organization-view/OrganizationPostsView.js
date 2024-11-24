import React from "react";
import { Box, Center, ScrollView } from "native-base";
import { styles } from "../../settings/constants/organization-view-styles/OrganizationViewStyles";
import FilterBar from "../../shared/FilterBar/FilterBar";
import Profile from "../../widgets/Profile/Profile";
import TabsMenuTwoItems from "../../shared/Tabs/TabsMenuTwoItems";
import Post from "../../widgets/Posts/Post";

const OrganizationPostsView = () => {

  return (
    <Box style={styles.container}>

      <Center>
        <Profile/>
      </Center>

      <Box style={styles.divider}/>

      <Box style={styles.tabsContainer}>
        <TabsMenuTwoItems label1={"Опросы"} label2={"Обсуждения"}/>
      </Box>

      <ScrollView>
        <Box style={styles.filterBarContainer}>
            <FilterBar />
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
        <Box style={styles.pollsCardsAndPosts}>
            <Post/>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default OrganizationPostsView;
import React, { useState } from "react";
import { Box, Center, Modal, Button, Text } from "native-base";
import { styles } from "../../settings/constants/organization-view-styles/OrganizationViewStyles";
import FilterBar from "../../shared/FilterBar/FilterBar";
import Profile from "../../widgets/Profile/Profile";
import TabsMenuTwoItems from "../../shared/Tabs/TabsMenuTwoItems";
import PollsCard from "../../widgets/Cards/PollsCard";
import BonusModal from "../../widgets/modals/BonusModal";

const OrganizationView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Box style={styles.container}>
      <Center>
        <Profile />
      </Center>

      <Box style={styles.divider} />

      <Box style={styles.tabsContainer}>
        <TabsMenuTwoItems label1={"Опросы"} label2={"Обсуждения"} />
      </Box>

      <Box>
        <Box style={styles.filterBarContainer}>
          <FilterBar />
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
          <PollsCard type="variant2" onBonusPress={toggleModalVisibility}/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
          <PollsCard type="variant2" onBonusPress={toggleModalVisibility}/>
        </Box>
        <Box style={styles.pollsCardsAndPosts}>
          <PollsCard type="variant2" onBonusPress={toggleModalVisibility}/>
        </Box>
      </Box>

      {isModalVisible && <Box style={styles.overlay} />}
      <Center styles={styles.modalContent}>
        <Modal isOpen={isModalVisible} onClose={toggleModalVisibility}>
            <BonusModal isOpen={isModalVisible} onClose={toggleModalVisibility}/>
        </Modal>
      </Center>
    </Box>
  );
};

export default OrganizationView;

import React, { useState } from "react";
import { Box, Text } from "native-base";
import { styles } from "../../settings/constants/viewed-user-profile-styles/ViewedByOthersUserProfileStyles";
import FilterBar from "../../shared/FilterBar/FilterBar";
import UserProfile from "../../features/UserProfile/UserProfile";

const ViewedByOthersUserProfile = () => {

  //Когда будем делать api, уберу захардкоженное, будет useEffect и все как надо, надеюсь(  
  const [profiles, setProfiles] = useState([
    { id: 1, userName: "User 1", userLogin: "login1", userOccupation: "occupation1" },
    { id: 2, userName: "User 2", userLogin: "login2", userOccupation: "occupation2" },
  ]);

  const removeProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.container1}>
        <Text style={styles.textStyle}>Всего: {profiles.length}</Text>
      </Box>

      <Box style={styles.container2}>
        <FilterBar />
      </Box>

      <Box style={styles.container3}>
        {profiles.map(profile => (
          <UserProfile
            key={profile.id}
            userName={profile.userName}
            userLogin={profile.userLogin}
            userOccupation={profile.userOccupation}
            type="variant2"
            onPress={() => removeProfile(profile.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ViewedByOthersUserProfile;

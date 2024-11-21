import { StyleSheet } from 'react-native';

export const styles = {
    container: {
      width: "100%",
      height: "100%",
      paddingTop: 20,
    },
    tabsContainer: {
      width: "100%",
      height: "44px",
      marginTop: 10,
    },
    divider: {
      width: "90%",
      height: "20px",
      marginTop: 20,
      marginRight: 17,
      marginLeft: 17,
      gap: 10,
      borderBottomWidth: 2,
      borderBottomColor: "rgba(118, 118, 118, 0.5)",
    },
    filterBarContainer: {
      width: "100%",
      height: 43,
      paddingTop: 11,
      paddingRight: 26,
      paddingBottom: 11,
      paddingLeft: 26,
      gap: 20,
      marginLeft: 15,
    },
    pollsCardsAndPosts:{
      marginTop: 5,
      marginBottom: 10,
      alignItems: "center",
    },
    overlay: { 
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      ackgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
    },
  };
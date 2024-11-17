
import { mainColor, primaryColor, secondaryColor, specificColor } from "../../settings/constants/Colors";
import { StyleSheet } from "react-native"

const basePadding=10;

const baseSmall={
    display: "flex",
    justifyContent:'flex-end',
    backgroundColor:secondaryColor,
    color:mainColor,
    height:'100%',
    flex:1,
    width:'100%',
    borderRadius:10,
    padding:basePadding
  
}

export const menu = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding:10,
    boxSizing:'border-box',
    gap:10,
    width:'100%',
   
  },
  column:{
    display: 'flex',
    height:'100%',
    flex:1,
    gap:10,
    height:282,
    flexDirection: "column",
    
  },
  small:{
    ...baseSmall
  },
  small2:{
    ...baseSmall,
    backgroundColor:specificColor,
  },

  large:{
    display: "flex",
    justifyContent:'flex-end',
    height:'100%',
    width:'100%',
    color:mainColor,
    backgroundColor:primaryColor,
    borderRadius:10,
    padding:basePadding
  },
  title:{
    color:mainColor,
    fontSize:18,
    marginBottom:basePadding
  },
  text:{
    color:mainColor,
    fontSize:14
  }

});

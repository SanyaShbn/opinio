import { StyleSheet } from "react-native"
import {mainColor, primaryColor} from "./../../../settings/constants/Colors"

export const styles = StyleSheet.create({
    container: {
      height:80,
      position:'absolute',
      bottom:-10,
      left:0,
          width:'100%',
      backgroundColor:primaryColor,
      paddingBottom:10,
      borderRadius:10,
      display:'flex',
      justifyContent:'space-around',
      flexDirection:'row',
      alignItems:'center'
      
    },
    tabbarItem:{
      color:mainColor,
      fontSize:12
    },
    tabBarItemWrapper:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      
    },
    iconContainer: {
      
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

  
  })
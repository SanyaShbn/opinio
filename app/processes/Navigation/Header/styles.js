import { StyleSheet } from "react-native"
import {mainColor, primaryColor} from "./../../../settings/constants/Colors"

export const header = StyleSheet.create({
  
    headerPrimary:{
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:primaryColor,
        display:'flex',
        justifyContent:'center',
     
    },
    headerText:{
        color:mainColor,
        marginLeft:20,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 24,
        textAlign: 'left',
       
    },
    headerIcon:{
        marginRight:20,
    }

  })
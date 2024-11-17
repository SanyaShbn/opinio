import { StyleSheet } from "react-native"
import { specificColor } from "../../settings/constants/Colors"


export const header = StyleSheet.create({
  
        container:{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            padding:10,
            paddingRight:20
           
            
        },
        title:{
            fontSize:18,
            fontWeight:500,
        },
        link:{
            fontSize:18,
            fontWeight:500,
            color:specificColor,
           
        }

  })
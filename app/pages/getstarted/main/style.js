import { StyleSheet } from "react-native"
import { mainColor, primaryColor, specificColor } from '../../../settings/constants/Colors';



export const getstarted = StyleSheet.create({

   firstpage:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      backgroundColor:primaryColor,
     
      
   },
   titleBox:{
    display:'flex',
      flexDirection:'column',
      justifyContent:'center',

      gap:10,

   },
   title:{
    fontSize:16,
    color:mainColor,
   textAlign:'center'

   },
   logo:{
    fontSize:36,
    fontWeight:800,
    color:mainColor,
     textAlign:'center'
   },
   description:{
    fontSize:14,
    color:mainColor,
     textAlign:'center'
   },
   imageBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:56,
    paddingBottom:106,
   },

   footer:{
    display:'flex',
    flexDirection:'column',
    gap:10
   },
   signupButtonWrapper:{
    display:'flex',
    alignItems:'center'
   },
   authWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:5
   
   },
   authDesc:{
 color:mainColor,
     
   },
   authLink:{
 color:specificColor,
     fontSize:20,
    
    
   }


  })
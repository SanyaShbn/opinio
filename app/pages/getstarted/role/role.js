import { StyleSheet } from "react-native"
import { defaultGrey, mainColor, primaryColor, secondaryColor, specificColor } from '../../../settings/constants/Colors';

const baseWrapper={
    display:'flex',
    flexDirection:'column',
    height:320,
    backgroundColor:'rgba(111, 200, 186, 0.3)',
    borderRadius:10,
}

export const role = StyleSheet.create({

        container:{
            height:'100%',
            display:'flex',
            flexDirection:'column',
            paddingTop:40,
            paddingRight:30,
            paddingLeft:30,
        },
        roleWrapper:{
           ...baseWrapper
         
        
        },
        imageBox:{
           width:'100%',
            
            height:210,
          
        },
      
        title:{
            textAlign:'center',
            fontSize:14,
            fontWeight:500,
            color:defaultGrey,
            marginTop:20
        },
        button:{
           width:224,
           height:40,
            backgroundColor:primaryColor,
            borderRadius:4,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:10
            
        },
        buttonText:{
          
           fontSize:18,
           color:mainColor,
           fontWeight:500,
           
           
        },
        roleWrapper2:{
            ...baseWrapper,
            marginTop:30,
            backgroundColor:'rgba(233, 106, 168, 0.3)',
        }

  })
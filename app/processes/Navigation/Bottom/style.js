import { StyleSheet } from "react-native"
import {primaryColor} from "./../../../settings/constants/Colors"

export const styles = StyleSheet.create({
    container: {
      height: "100px",
      position:"absolute",
      bottom:0,
      left:0,
      width:"100%",
      backgroundColor:"red",
      paddingBottom:"10px",
      borderRadius:"10px",
      display:"flex",
      justifyContent:"space-between",
      color:"black"
    }
  })
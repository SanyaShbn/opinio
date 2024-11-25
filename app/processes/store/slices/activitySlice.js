import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../requestFactory";



//----state---
const initialState = {
    list:[{
        id:"EDUCATION",
        name:"Учусь"
    }],

}
//--------------



const activitySlice = createSlice({
    name: DomainNames.activity,
    initialState,
    reducers: {    
        

        
    },
   
      })

  export function getActivities(state){
    return state[DomainNames.activity].list;
}


  export default activitySlice.reducer
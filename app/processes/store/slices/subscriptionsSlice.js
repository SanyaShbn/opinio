import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../requestFactory";



//----state---
const initialState = {
  subscriptions:[{

      id:1,
      topic:";ec;cd"

    }],
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.subscriptions, api.subscriptions.url);
    //-------------------

    //---fetch---
    export const fetchSubscriptions = apiFactory.createGetRequest(api.subscriptions.fetch, true)
    //----------------------


const subscriptionsSlice = createSlice({
    name: DomainNames.subscriptions,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder


        //---получение подписок-------------
        .addCase(fetchSubscriptions.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.subscriptions = action.payload

        
        })
        .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        }
      })

  export function getSubscriptions(state){
    return state[DomainNames.subscriptions].subscriptions;
}

export function getSubscriptionStatus(state){
    return state[DomainNames.subscriptions].status
  }

  export function getSubscriptionError(state){
    return state[DomainNames.subscriptions].error
  }


  export default subscriptionsSlice.reducer
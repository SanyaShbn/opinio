import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../requestFactory";



//----state---
const initialState = {
    categories:[
        
        {
        id:1,
        name:"Услуги"
    },
    {
        id:2,
        name:"Продукт"
    }


],
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.category, api.category.url);
    //-------------------

    //---fetch---
    export const fetchCategory = apiFactory.createGetRequest(api.category.fetch, true)
    //----------------------




const categorySlice = createSlice({
    name: DomainNames.category,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder


        //---получение катеогорий-------------
        .addCase(fetchCategory.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.categories = action.payload

        
        })
        .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        }
      })

  export function getCategories(state){
    return state[DomainNames.category].categories;
}

export function getCategoriesStatus(state){
    return state[DomainNames.category].status
  }

  export function getCategoriesError(state){
    return state[DomainNames.category].error
  }


  export default categorySlice.reducer
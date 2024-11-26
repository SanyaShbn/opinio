import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../requestFactory";
import statusTypes from "../constants/statusTypes";

//----state---
const initialState = {
    token:"",
    type:statusTypes.org,
    user:{
        id:"",
        name:"",
        token:"",
    },
    organization:{
        id:"",
        name:"Название компании",
        login:"",
        activityType:"",
        tags:[],
        mission:"",
        description:"",
        email:"",
        phone:"",
        webSite:"",
        bonuses: [],
        polls: [

           {
                id: "384734fher", 
                title: "Заголовок",
                description: "Описание",
                category: {
                    id:"ldfkmvld",
                    name:"Образование"
                }, 
                createdBy: null,
                questions: [], 
                bonuses: [], 
                createdAt: null, 
                updatedAt: null
           }
    
        ],
        categories: null
    },
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.user, api.user.url);
    //-------------------

    //---fetch user---
    export const fetchUserData = apiFactory.createGetRequest(api.user.fetch, true)
    //----------------------

      //---fetch org---
      export const fetchOrgData = apiFactory.createGetRequest(api.org.fetch, true)
      //----------------------

    //---auth---
    export const authUser = apiFactory.createPostRequest(api.user.auth)
    //----------------------

    //---sign up user---
    export const signUpUser = apiFactory.createPostRequest(api.user.signUpUser)
    //----------------------
    
    //---sign up organization---
    export const signUpOrg = apiFactory.createPostRequest(api.user.signUpOrg)
    //----------------------


const userSlice = createSlice({
    name: DomainNames.user,
    initialState,
    reducers: {   
       
        controlStatus(state, action) {

            state.status = action.payload
        },
        controlType(state, action) {

            state.type = action.payload
          
        },
        setUserdata(state,action){
          
            if(state.type==statusTypes.user){
                state.user = {...state.user, ...action.payload}
                console.log(state.user)
            }else if(state.type==statusTypes.org) {
                state.organization = {...state.organization, ...action.payload}
                console.log(state.organization)
            }

           
           
        }
        
    },
    extraReducers(builder) {
      builder


        //---получение пользователя-------------
        .addCase(fetchUserData.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.user = action.payload

        })
        .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        //---получение организации-------------
        .addCase(fetchOrgData.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchOrgData.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.organization = {...action.payload.data}

        })
        .addCase(fetchOrgData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        
        //---аутентификация пользователя-------------
        .addCase(authUser.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(authUser.fulfilled, (state, action) => {
        state.status = 'succeeded';

        
        state.token = action.payload.token
        state.type = action.payload.role
        if(action.payload.role==statusTypes.org){
            state.organization.id = action.payload.id
        }else{
            state.user.id = action.payload.id
        }

        })
        .addCase(authUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
                
        //---регистрация пользователя-------------
        .addCase(signUpUser.pending, (state, action) => {

            state.status = statusTypes.loading
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
            state.status = statusTypes.succeeded
    
             
            state.token = action.payload.token
            state.type = action.payload.role
            if(action.payload.role==statusTypes.org){
                state.organization.id = action.payload.id
            }else{
                state.user.id = action.payload.id
            }
    
            })
            .addCase(signUpUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
              //---регистрация организации-------------
        .addCase(signUpOrg.pending, (state, action) => {

            state.status = statusTypes.loading
            })
            .addCase(signUpOrg.fulfilled, (state, action) => {
            state.status = statusTypes.succeeded
    
            state.token = action.payload.token
            state.type = action.payload.role
            if(action.payload.role==statusTypes.org){
                state.organization.id = action.payload.id
            }else{
                state.user.id = action.payload.id
            }
    
            })
            .addCase(signUpOrg.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
        }
      })

  export function getUser(state){

    if(state[DomainNames.user].type==statusTypes.user){
    
        return state[DomainNames.user].user;
    }else if(state[DomainNames.user].type===statusTypes.org){
    
        return state[DomainNames.user].organization;
    }

   
}
export function getOrganization(state){
    return state[DomainNames.user].organization;
}

export function getUserStatus(state){
    return state[DomainNames.user].status
  }
  export function getUserType(state){
    return state[DomainNames.user].type
  }

  export function getUserError(state){
    return state[DomainNames.user].error
  }

  export const { controlStatus,controlType,setUserdata } = userSlice.actions
  export default userSlice.reducer
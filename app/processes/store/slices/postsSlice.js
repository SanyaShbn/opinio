import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../requestFactory";
import statusTypes from "../constants/statusTypes";

//----state---
const initialState = {
    list:[

       {
            id: ";sdmcmsd",
            title: "Заголо",
            content: "фыдвсдфсцудьсуфюьбмь лдыаьмоьцудфьжскьлдцуькс",
            createdAt: "15.09.2024", 
            organizationName: "фдыьслдыс",
            commentCount: 10
        },
        {
            id: ";wewewde",
            title: "Заголо",
            content: "фыдвсдфсцудьсуфюьбмь лдыаьмоьцудфьжскьлдцуькс",
            createdAt: "15.09.2024", 
            organizationName: "фдыьслдыс",
            commentCount: 10
        }
        

    ],
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.posts, api.posts.url);
    //-------------------
    //---fetch user---
    export const fetchOrgPosts = apiFactory.createGetRequest(api.posts.fetch, true)
    //----------------------
    //---fetch user---
    export const deletePosts = apiFactory.createDeleteRequest(api.posts.delete, true)
    //----------------------

    //---fetch user---
    export const fetchPostComments = apiFactory.createGetRequest(api.posts.comments, true)
    //----------------------

   


const postsSlice = createSlice({
    name: DomainNames.posts,
    initialState,
    reducers: {   
    
        deletePost(state, action){
        
            state.list =  state.list.filter(item=>item.id!=action.payload)
           
        }
    },
    extraReducers(builder) {
      builder


        //---получение постов-------------
        .addCase(fetchOrgPosts.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchOrgPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.list = action.payload

        })
        .addCase(fetchOrgPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        

        //---удаление постов-------------
        .addCase(deletePosts.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(deletePosts.fulfilled, (state, action) => {
        state.status = 'succeeded';



        })
        .addCase(deletePosts.rejected, (state, action) => {
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
export function getPosts(state){
    return state[DomainNames.posts].list;
}

export function getPostsStatus(state){
    return state[DomainNames.posts].status
  }


  export function getPostsError(state){
    return state[DomainNames.posts].error
  }
  export const { deletePost } = postsSlice.actions
  export default postsSlice.reducer
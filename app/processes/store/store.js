import { configureStore } from "@reduxjs/toolkit";
import DomainNames from "./constants/DomainNames";
import categorySlice from './slices/categorySlice';
import subscriptionsSlice from './slices/subscriptionsSlice';
import userSlice from './slices/userSlice';
import activitySlice from './slices/activitySlice'
export default configureStore({
    reducer:{
        [DomainNames.category]:categorySlice,
        [DomainNames.subscriptions]:subscriptionsSlice,
        [DomainNames.user]:userSlice,
        [DomainNames.activity]:activitySlice
    },
   
})
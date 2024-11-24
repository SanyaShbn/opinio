import { configureStore } from "@reduxjs/toolkit";
import DomainNames from "./constants/DomainNames";
import categorySlice from './slices/categorySlice';
import subscriptionsSlice from './slices/subscriptionsSlice';

export default configureStore({
    reducer:{
        [DomainNames.category]:categorySlice,
        [DomainNames.subscriptions]:subscriptionsSlice
    },
   
})
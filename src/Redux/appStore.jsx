
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

import restInfoReducer from './restInfoSlice.jsx'
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        restInfo:restInfoReducer
    }
});

export default appStore;
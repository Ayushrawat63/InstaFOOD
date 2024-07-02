import { createSlice } from "@reduxjs/toolkit";


const  restInfoSlice=createSlice({
    name:"restInfo",
    initialState:null,
    reducers:{
        addInfo:(state,action)=>{
            return action.payload;
        },
        removeInfo:()=>{
            return null;
        }
    }
})

export const {addInfo,removeInfo}=restInfoSlice.actions;

export default restInfoSlice.reducer;
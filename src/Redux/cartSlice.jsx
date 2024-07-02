import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:'cart',
    initialState:{
        itemInCart:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //muttating over the state
            state.itemInCart.push(action.payload)
        },
        removeItem:(state,action)=>{
           
            state.itemInCart.pop();
            
        },
        clearItem:(state,action)=>{
          state.itemInCart.length=0;
        }
    }
})

export const {addItem,removeItem,clearItem}=cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";




const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
     addtocart:(state,action)=>{
        state.push(action.payload)
     },

     removecart:(state,action)=>{
      return state.filter(item=>item.id!=action.payload)
     }
    }
})


export const {addtocart,removecart} = cartslice.actions

export default cartslice.reducer
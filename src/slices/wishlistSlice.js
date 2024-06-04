import { createSlice } from "@reduxjs/toolkit";



const wishlistslice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{


        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },

        removewhishlist:(state,action)=>{
         return  state.filter(item=>item.id!=action.payload)
        }
    }
})


export const {addtowishlist,removewhishlist} = wishlistslice.actions
export default wishlistslice.reducer
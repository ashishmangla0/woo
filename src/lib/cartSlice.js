const { createSlice } = require("@reduxjs/toolkit");


const cartInitialState = {
    id:'',
    name:'empty cart',
    items:[],
    total:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState:cartInitialState,
    reducers:{
        addToCart:(state,action) =>{

        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
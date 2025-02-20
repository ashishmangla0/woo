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
            const { id, name, price, quantity = 1 } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
      
            if (existingItem) {
              existingItem.quantity += quantity; // Increase quantity if item already exists
            } else {
              state.items.push({ id, name, price, quantity }); // Add new item to the cart
            }
      
            state.total += price * quantity; // Update total price

            console.log(state.items);
            
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
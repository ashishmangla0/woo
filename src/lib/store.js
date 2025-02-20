const { configureStore, createReducer } = require("@reduxjs/toolkit");
import productsReducer from './productsSlice';
import cartReducer from './cartSlice'

const Store = configureStore({
    reducer: {
        products:productsReducer ,
        cart:cartReducer
      },
})

export default Store
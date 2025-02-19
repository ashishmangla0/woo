const { configureStore } = require("@reduxjs/toolkit");
import productsReducer from './productsSlice';

const Store = configureStore({
    reducer: {
        products:productsReducer ,
      },
})

export default Store
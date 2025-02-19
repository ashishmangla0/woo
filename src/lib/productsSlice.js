import { getProducts } from "@/utils/wooUtils";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",async () => {
        const response = await getProducts()
        return response
      }
)

const productsInitials = {
    items: [],
    currentPage: 1,
    perPage: 10,
    totalItems: 0,
    totalPages: 0,
    loading: false,
    error: null,
}

const  productsSlice = createSlice({
    name: 'products',
    initialState: productsInitials,
    reducers: {
        setPage: (state, action) => {
          state.currentPage = action.payload;
        },
        
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
          })
    }
})

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
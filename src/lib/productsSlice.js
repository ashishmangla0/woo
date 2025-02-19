import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// const WooCommerce = new WooCommerceRestApi({
//   url: "http://shop.aavyamart.com/", // Your store URL
//   consumerKey: "ck_5ff5befe5afa03bd12ddf1f4445129da3d9e8ab0", // Your consumer key
//   consumerSecret: "cs_ed12e8d833a2f29cc84aacd1f6cbbaa6c7ef3a0a", // Your consumer secret
//   version: "wc/v3", // WooCommerce API version
// });

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products",{
      method: "GET",
      // headers: {
      //   "Authorization": `Basic Authorization: Basic Y2tfNWZmNWJlZmU1YWZhMDNiZDEyZGRmMWY0NDQ1MTI5ZGEzZDllOGFiMDpjc19lZDEyZThkODMzYTJmMjljYzg0YWFjZDFmNmNiYmFhNmM3ZWYzYTBh`,
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin" : "*"
      // }
    }
  );
  const data = await response.json();

  return data;
});

const productsInitials = {
  items: [],
  currentPage: 1,
  perPage: 10,
  totalItems: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitials,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;

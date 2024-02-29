import { createSlice } from "@reduxjs/toolkit";

const initialState = { allProducts: [], details: {} };

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    fetchedProducts: (state, action) => {
      return {
        ...state,
        allProducts: action.payload,
      };
    },
    addedProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
    // searchProducts: (state, action) => {
    //   // console.log(action.payload);
    //   const text = action.payload.toLowerCase();
    //   return {
    //     ...state,
    //     filtered: state.allProducts.filter((item) =>
    //       item.product_name.toLowerCase().startsWith(text)
    //     ),
    //   };
    // },
    productDetails: (state, action) => {
      return {
        ...state,
        details: action.payload,
      };
    },
    deletedProduct: (state, action) => {
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (product) => product.objectId !== action.payload
        ),
      };
    },
  },
});
export const {
  fetchedProducts,
  addedProduct,
  searchProducts,
  productDetails,
  deletedProduct,
} = productSlice.actions;
export default productSlice.reducer;

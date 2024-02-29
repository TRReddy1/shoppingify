import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartReducer, { localStorageMiddleware } from "../features/cartSlice";
import listReducer from "../features/listSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    lists: listReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

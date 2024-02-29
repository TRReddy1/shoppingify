import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = JSON.parse(localStorage.getItem("cartState")) || [];

// const products = useSelector((state) => state.products);
// console.log(products);

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    fetchCart: (state, action) => {
      return state;
    },
    addedCart: (state, action) => {
      state.push(action.payload);
    },
    addQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    },
    removeQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
    },
    deletedCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state, action) => {
      return [];
    },
  },
});

export const {
  fetchCart,
  addedCart,
  addQuantity,
  removeQuantity,
  deletedCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// export const localStoragemiddleware =
// Middleware to save state to local storage
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState().cart;
  localStorage.setItem("cartState", JSON.stringify(state));
  return result;
};

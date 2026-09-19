import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("CART")
      ? JSON.parse(localStorage.getItem("CART"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload, ...state.cart];
      localStorage.setItem("CART", JSON.stringify(state.cart));
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("CART", JSON.stringify(state.cart));
    },
    increaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const { addToCart, removeToCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;

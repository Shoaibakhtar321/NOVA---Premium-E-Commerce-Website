import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: localStorage.getItem("WISHLIST")
      ? JSON.parse(localStorage.getItem("WISHLIST"))
      : [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist = [action.payload, ...state.wishlist];
      localStorage.setItem("WISHLIST", JSON.stringify(state.wishlist));
    },
    removeToWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id != action.payload,
      );
      localStorage.setItem('WISHLIST', JSON.stringify(state.wishlist))
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find(
        (product) => product.id === productToAdd.id
      );

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        existingProduct.quantity++;
      } else {
        // If the product is not in the cart, add it with quantity = 1
        state.push({ ...productToAdd, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      return state.filter((product) => product.id !== productIdToRemove);
    },
    decreaseQuantity: (state, action) => {
      const productIdToDecrease = action.payload;
      const existingProduct = state.find(
        (product) => product.id === productIdToDecrease
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
        } else {
          // If quantity is 1, remove the product from the cart
          const index = state.findIndex(
            (product) => product.id === productIdToDecrease
          );
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

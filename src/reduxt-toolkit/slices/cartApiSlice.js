// cartApiSlice.js

import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartApiSlice = createSlice({
  name: "cartApi",
  initialState: [],
  reducers: {
    loadCartItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadCartItems } = cartApiSlice.actions;

// Async action to save cart items to AsyncStorage
export const saveCartItemsToAsyncStorage = (cartItems) => {
  return async (dispatch) => {
    try {
      // Convert cartItems to a JSON string and store it in AsyncStorage
      const cartItemsJSON = JSON.stringify(cartItems);
      await AsyncStorage.setItem("cartItems", cartItemsJSON);

      // Dispatch the loadCartItems action to update the API Slice
      dispatch(loadCartItems(cartItems));
    } catch (error) {
      console.error("Error saving cart items to AsyncStorage:", error);
    }
  };
};

// Async action to load cart items from AsyncStorage
export const loadCartItemsFromAsyncStorage = () => {
  return async (dispatch) => {
    try {
      // Retrieve cart items from AsyncStorage
      const cartItemsJSON = await AsyncStorage.getItem("cartItems");
      if (cartItemsJSON) {
        const cartItems = JSON.parse(cartItemsJSON);
        console.log("🚀 ~ file: cartApiSlice.js:42 ~ return ~ cartItems:", cartItems)

        // Dispatch the loadCartItems action to update the API Slice
        dispatch(loadCartItems(cartItems));
      }
    } catch (error) {
      console.error("Error retrieving cart items from AsyncStorage:", error);
    }
  };
};

export default cartApiSlice.reducer;

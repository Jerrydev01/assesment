import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import cartApiReducer from "../slices/cartApiSlice"; // Import your cart API slice

const rootReducer = combineReducers({
  cart: cartReducer,
  cartApi: cartApiReducer, // Add your cart API slice to the root reducer
});

export const store = configureStore({
  reducer: rootReducer,
});

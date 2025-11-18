import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slice/cart";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
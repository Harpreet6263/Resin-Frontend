import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slice/cart";
import authReducer from "@/store/slice/auth";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
})
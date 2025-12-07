import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutSuccess: (state, action) => {
            toast.success(action.payload);
            state.user = null;
            state.isAuthenticated = false;
        },
        handleError: (state, action) => {
            toast.error(action.payload);
            state.isAuthenticated = false;
            state.user = null;
        }
    },
});

export const { handleError, loadUser, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;

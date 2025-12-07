import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { handleError, loadUser, logoutSuccess } from "../../slice/auth";
import setAuthToken from "../../setAuthToken";
import sessionExpired from "@/store/sessionExpired";

export const signIn = createAsyncThunk(
    "signIn",
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_URL}/api/user/seller/login`,
                data,
            );
            if (res?.data && res.data?.success == true) {                
                dispatch(loadUser(res.data?.data?.user));
                Cookies.set("loggedIn", res?.data?.data?.token);
                return res.data;
            } else {
                dispatch(handleError(res?.data?.message));
                return rejectWithValue(res?.data?.message);
            }
        } catch (error) {
            console.log("error ====>", error?.response?.data);
            dispatch(handleError(error?.response?.data?.message));
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const sellerProfile = createAsyncThunk(
    "SellerProfile",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            setAuthToken(Cookies.get("loggedIn"))
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/api/user/seller/profile`,
                config,
            );

            if (res?.data && res.data?.success == true) {                
                dispatch(loadUser(res.data?.data));
                return res.data;
            } else {                
                dispatch(handleError(res?.data?.message));
                return rejectWithValue(res?.data?.message);
            }
        } catch (error) {
            console.log("API error occurred:", error?.response);
            dispatch(handleError(error?.response?.data?.message));
            sessionExpired(error?.response?.data, dispatch);
            return rejectWithValue(error?.response?.data);
        }
    }
);
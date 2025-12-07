"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from './header';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';

const ParentChildren = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <Toaster position="top-right" />
                <div className="text-[#403F2B] bg-white">
                    {children}
                </div>

            </Provider>
        </>
    )
}

export default ParentChildren
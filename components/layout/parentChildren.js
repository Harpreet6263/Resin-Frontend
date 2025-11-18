"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from './header';
import Footer from './footer';

const ParentChildren = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <div className="text-[#403F2B] bg-white">
                    <Header />
                    {children}
                    <Footer />
                </div>

            </Provider>
        </>
    )
}

export default ParentChildren
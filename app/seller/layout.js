"use client"
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { sellerProfile } from '@/store/action/seller/auth';

const layout = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const token = Cookies.get("loggedIn");
    const router = useRouter();
    
    useEffect(() => {
        if (token) {
            dispatch(sellerProfile()).then(res => {
                if (!res?.payload?.success) {
                    Cookies.remove("loggedIn");
                    // toast.error(res.payload?.data?.message);
                    router.prefetch('/', '/', { priority: true })
                    router.push('/');
                }
            }).catch((error) => {
                console.error("Error fetching profile:", error);
                toast.error("An error occurred while fetching your profile.");
                router.push('/');
            })
        }
    }, [dispatch, router]);



    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         if (!user) {
    //             dispatch(handleLoginModal(true));
    //         }
    //     }, 60000);

    //     // Cleanup the timeout in case the component unmounts or user is set before 3 seconds
    //     return () => clearTimeout(timeoutId);
    // }, [user]);

    
    return (
        <div className={` antialiased`}>
            {/* <Header /> */}
            {children}
            {/* <Footer />
            <BottomNavigation /> */}
        </div>
    )
}

export default layout
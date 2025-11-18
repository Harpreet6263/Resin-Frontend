'use client'
import React, { useState } from 'react'
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Menu from '../homepage/menu';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { cartCount } = useSelector(state => state.cart)

    return (
        <>
            <div className='w-full text-[#403F2B] bg-[#fefaf0] flex items-center justify-between fraunces sm:px-20 xl:px-30 px-5 py-4'>
                <p className='text-2xl hidden sm:block cursor-pointer ' onClick={() => { setIsMenuOpen(true) }}>Menu</p>
                {/* <p className='text-xl block sm:hidden cursor-pointer'>Cart</p> */}
                <Bars3Icon className='w-7 sm:hidden cursor-pointer' onClick={() => { setIsOpen(true) }} />
                <p className='text-2xl sm:text-3xl'>R.V</p>
                <div className='hidden sm:flex items-center gap-8 text-xl'>
                    {/* <p className='cursor-pointer'>Cart</p> */}
                    <Link
                        href={"/cart"}
                        className='relative w-fit'>
                        <ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
                        <p className='absolute bg-red-500 text-white rounded-full m-0 p-0 -top-1 -right-2 text-xs min-w-4 min-h-4 text-center'>{cartCount || 0}</p>
                    </Link>

                    <div className='flex items-center gap-2 cursor-pointer'>
                        <UserCircleIcon className='w-7' />
                        <p>Login</p>
                    </div>
                </div>
                <Link
                    href={"/cart"} className='relative w-fit block sm:hidden'>
                    <ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
                    <p className='absolute bg-red-500 text-white rounded-full m-0 p-0 -top-1 -right-2 text-xs min-w-4 min-h-4 text-center'>{cartCount || 0}</p>
                </Link>

            </div>
            <div className={`${isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'} w-full bg-white transition-all duration-500 ease-in-out z-20 fixed top-0 overflow-hidden px-5 `}>
                <div className='flex justify-between items-center  py-3 pt-10'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <UserCircleIcon className='w-7' />
                        <p>Login</p>
                    </div>
                    <XMarkIcon className='w-7 cursor-pointer' onClick={() => { setIsOpen(false) }} />
                </div>
                <Menu />
            </div>
            <div className={`${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'} w-full bg-white transition-all duration-500 ease-in-out z-20 fixed top-0 overflow-hidden px-5 `}>
                <div className='flex justify-between items-center px-10 py-3 pt-10'>
                    <XMarkIcon className='w-7 cursor-pointer' onClick={() => { setIsMenuOpen(false) }} />
                    <p className='text-2xl sm:text-3xl'>R.V</p>
                    <p></p>
                </div>
                <Menu setIsMenuOpen={setIsMenuOpen} />
            </div>
        </>
    )
}

export default Header
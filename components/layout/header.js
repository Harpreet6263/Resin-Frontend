'use client'
import React, { useState } from 'react'
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Menu from '../homepage/menu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className='w-full bg-[#fefaf0] flex items-center justify-between fraunces sm:px-20 xl:px-30 px-5 py-4'>
                <p className='text-2xl hidden sm:block cursor-pointer ' onClick={() => { setIsMenuOpen(true) }}>Menu</p>
                <p className='text-xl block sm:hidden cursor-pointer'>Cart</p>
                <p className='text-2xl sm:text-3xl'>R.V</p>
                <div className='hidden sm:flex items-center gap-8 text-xl'>
                    <p className='cursor-pointer'>Cart</p>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <UserCircleIcon className='w-7' />
                        <p>Login</p>
                    </div>
                </div>
                <Bars3Icon className='w-7 sm:hidden cursor-pointer' onClick={() => { setIsOpen(true) }} />
            </div>
            <div className={`${isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'} w-full bg-white transition-all duration-500 ease-in-out z-10 absolute top-0 overflow-hidden px-5 `}>
                <div className='flex justify-between items-center  py-3 pt-10'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <UserCircleIcon className='w-7' />
                        <p>Login</p>
                    </div>
                    <XMarkIcon className='w-7 cursor-pointer' onClick={() => { setIsOpen(false) }} />
                </div>
                <Menu />
            </div>
            <div className={`${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'} w-full bg-white transition-all duration-500 ease-in-out z-10 absolute top-0 overflow-hidden px-5 `}>
                <div className='flex justify-between items-center px-10 py-3 pt-10'>
                    <XMarkIcon className='w-7 cursor-pointer' onClick={() => { setIsMenuOpen(false) }} />
                    <p className='text-2xl sm:text-3xl'>R.V</p>
                    <p></p>
                </div>
                <Menu />
            </div>
        </>
    )
}

export default Header
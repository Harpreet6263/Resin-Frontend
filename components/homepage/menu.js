import React from 'react'

const Menu = () => {
  return (
    <div className='fraunces flex w-full sm:justify-around sm:pt-20 py-10'>
        <div className='text-3xl sm:text-5xl flex flex-col gap-9'>
            <p className='cursor-pointer'>Home</p>
            <p className='cursor-pointer'>Shop All</p>
            <p className='cursor-pointer'>Our Mission</p>
            <p className='cursor-pointer'>Contact</p>
            <p className='cursor-pointer'>FAQ</p>
        </div>
        <div className='sm:flex flex-col gap-10 hidden text-3xl'>
            <p>Shop Collections:</p>
            <div className='flex flex-col gap-6'>
                <p className='cursor-pointer'>Kitchen</p>
                <p className='cursor-pointer'>Bath</p>
                <p className='cursor-pointer'>On the Go</p>
                <p className='cursor-pointer'>Sale</p>
            </div>
        </div>
    </div>
  )
}

export default Menu
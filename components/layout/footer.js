import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#e8e59b] text-[#403F2B]'>
            <div className='flex flex-wrap lg:flex-nowrap px-5 sm:px-20 xl:px-30 py-12 gap-15 lg:gap-5 items-center '>
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                    <div className='max-w-[500px] flex flex-col justify-start  gap-15'>
                        <p className='text-[rgb(64_63_43)] text-4xl sm:text-[4rem] '>
                            Stay inspired and eco-conscious
                        </p>
                        <p className='helvetica'>
                            Receive the latest trends and tips on eco-friendly design, sustainable living, zero waste and eco-conscious practices.
                        </p>
                        <form className='helvetica'>
                            <label htmlFor='email'>Email *</label><br />
                            <input type="email" id="email" required className='border-b-1 w-full focus:outline-none' />
                            <br />
                            <input type='checkbox' id="verification" required className='mt-10 ' />
                            <label htmlFor='verification' className='pl-3'>
                                Yes, subscribe me to your newsletter.*
                            </label>
                            <input type="submit" value="Submit" className='float-right text-black border rounded-4xl px-7 py-3 text-center mt-18 font-light cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-400 ease-in-out text-lg' />
                        </form>
                    </div>
                </div>
                <div className='flex flex-wrap justify-around lg:justify-end xl:justify-center w-full lg:w-1/2 gap-x-5 gap-y-12 sm:gap-10 xl:gap-20 helvetica'>
                    <div className='flex flex-col gap-5 w-[140px] sm:w-fit'>
                        <p>Home</p>
                        <p>Shop All</p>
                        <p>Our Mission</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div>
                    <div className='flex flex-col gap-5 w-[100px] sm:w-fit'>
                        <p>Kitchen</p>
                        <p>Bath</p>
                        <p>On the Go</p>
                        <p>Sale</p>
                    </div>
                    <div className='flex flex-col gap-5 w-[140px] sm:w-fit'>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Policy</p>
                        <p>Refund Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className='flex lg:hidden flex-col gap-5 w-[100px] sm:w-fit'>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Pinterest</p>
                    </div>
                </div>

            </div>
            <div className='border-t flex items-center justify-between px-5 sm:px-20 xl:px-30 py-12 helvetica'>
                <p className=''>
                    © 2035 by Re.Vert. Powered and secured
                </p>
                <div className='hidden sm:flex gap-15 w-1/2 justify-center'>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Pinterest</p>
                </div>
            </div>
        </div>

    )
}

export default Footer
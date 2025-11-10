"use client"
import React from 'react'
import Header from '../layout/header'
import Corusel from './corusel'
import Image from 'next/image'
import banner from '../../public/images/home-banner.avif'
import { motion } from "motion/react"
import Collection from './collection'
import Mission from './mission'
import Game from '../game/game'
import Link from 'next/link'
const Homepage = () => {

  const transition = {
    duration: 1,
    delay: 0.5
  }
  return (
    <div className="w-full fraunces bg-[#fefaf0]">

      <div
        className="bg-fixed bg-cover bg-center h-[90vh] w-full overflow-hidden"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="flex items-center justify-center h-full bg-black/30 text-white">
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, translateY: 200 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={transition}
              className="text-8xl sm:text-[10rem] md:text-[15rem] xl:text-[18rem] text-[rgb(255_253_195)] leading-none">Re.vert</motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition} className='text-center text-sm sm:text-lg md:text-2xl xl:text-3xl mt-5 sm:mt-0'>Home Essentials for Sustainable Living </motion.p>
            <Link href="/products">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                className='bg-white text-black rounded-4xl px-7 py-3 text-center mt-18 font-light cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-400 ease-in-out' >Shop Now</motion.button>
            </Link>
          </div>

        </div>
      </div>

      <div className="relative py-10 sm:py-15 sm:px-15 xl:px-20">
        <Corusel />
      </div>

      <div className='bg-[#c4c197] flex flex-col md:flex-row py-10 px-5 sm:py-20 sm:px-20 xl:px-30 md:gap-5 gap-12'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
          className='w-full md:w-1/2 flex flex-col gap-6 md:gap-10 justify-center lg:ml-5 md:items-start items-center'>

          <p className='text-4xl sm:text-[4rem] text-[rgb(64_63_43)] leading-none'>Zero Waste <br /> Bath Products</p>
          <p className='helvetica text-base sm:text-xl text-[rgb(64_63_43)]'>Where quality meets eco-friendly</p>
          <button
            className='w-fit helvetica text-white rounded-4xl px-7 py-3 border border-[rgb(64_63_43)] text-center sm:mt-3 font-light cursor-pointer bg-[rgb(64_63_43)] hover:bg-transparent hover:text-[rgb(64_63_43)] transition-all duration-400 ease-in-out' >
            Shop Now</button>

        </motion.div>
        <div className='w-full md:w-1/2  overflow-hidden flex justify-end'>
          <motion.img
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition}
            src="https://static.wixstatic.com/media/c837a6_7525c017b9c54e089583eee948271588~mv2.jpg/v1/crop/x_209,y_1448,w_4040,h_3568/fill/w_541,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_2005823990.jpg"
            alt="image"
            className="w-full h-full max-h-[500px] max-w-[500px] aspect-square object-cover rounded-4xl"
          />
        </div>
      </div>

      <Collection />
      <Mission />
      <Game />
    </div >

  )
}

export default Homepage
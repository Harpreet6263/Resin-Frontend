"use client"
import React from 'react'
import Sidebar from './sidebar'
import Listing from './listing'
import { motion } from "motion/react"
import Breadcrumb from './breadcrumb'

const Products = () => {

  const transition = {
    duration: 1,
    delay: 0.2
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
      className='px-5 sm:px-20 xl:px-30 py-12 flex flex-col gap-10 bg-[#fefaf0] relative'>
      <Breadcrumb />
      <div className='flex'>
        <Sidebar />
        <Listing />
      </div>
    </motion.div>

  )
}

export default Products
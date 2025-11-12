"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import Listing from './listing'
import { motion } from "motion/react"
import Breadcrumb from './breadcrumb'
import Detail from '../detail/detail'
import { useSearchParams } from 'next/navigation'
import CryptoJS from "crypto-js";

const Products = ({ product_id }) => {

  const searchParams = useSearchParams()
  const filter = searchParams.get('filter');
  let crypto_key = process.env.NEXT_PUBLIC_CRYPTO_KEY;

  const [budgetValue, setBudgetValue] = useState([50, 10000])
  const [productName, setProductName] = useState();
  const [filterData, setFilterData] = useState(null);
  const transition = {
    duration: 1,
    delay: 0.2
  }

  const categories = [
    { id: 1, name: "All Products" },
    { id: 2, name: "Bath" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "New" },
    { id: 5, name: "On the Go" },
    { id: 6, name: "Sale" },
  ];
  const [categorySelected, setCategorySelected] = useState(categories[0]?.id)

  // Reverse of base64UrlEncode
  const base64UrlDecode = (str) => {
    str = str
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    // pad with = to make length multiple of 4
    while (str.length % 4) str += "=";
    return str;
  }

  useEffect(() => {
    if (filter && filter != null) {
      try {

        const decoded = base64UrlDecode(filter);

        const decrypted = CryptoJS.AES.decrypt(decoded, crypto_key);
        let data = decrypted.toString(CryptoJS.enc.Utf8);
        data = JSON.parse(data);

        setCategorySelected(data.category);
        setBudgetValue(data.budget);
        setFilterData(data);
      } catch (e) {
        console.error("Failed to decrypt filter:", e);
      }
    }
  }, [filter]);


  return (
    <div
      className='px-5 sm:px-20 xl:px-30 py-12 flex flex-col gap-10 bg-[#fefaf0] relative'>
      <Breadcrumb categories={categories} categorySelected={categorySelected} productName={productName} filter={filter} />
      {product_id ?
        <Detail product_id={product_id} setProductName={setProductName} /> :
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
          className='flex'>
          <Sidebar
            budgetValue={budgetValue}
            setBudgetValue={setBudgetValue}
            categories={categories}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          <Listing
            budgetValue={budgetValue}
            setBudgetValue={setBudgetValue}
            categories={categories}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            filterData={filterData}
          />
        </motion.div>}
    </div>

  )
}

export default Products
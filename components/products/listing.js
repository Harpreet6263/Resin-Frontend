"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Accordion, AccordionItem, Radio, RadioGroup, Select, SelectItem, Slider } from '@heroui/react'
import Paginations from '../pagination'

const Listing = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category');
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const animals = [
    { key: "recommended", label: "Recommended" },
    { key: "newest", label: "Newest" },
    { key: "low_to_high", label: "Price (low to high)" },
    { key: "high_to_low", label: "Price (high to low)" },
    { key: "a_to_z", label: "Name A-Z" },
    { key: "z_to_a", label: "Name Z-A" },
  ];

  const products = [
    {
      name: "Eco Glass",
      price: 5.50,
      category: "Glassware",
      image: "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
      bestSeller: true,
      sale: false,
    },
    {
      name: "Recycled Bottle",
      price: 8.00,
      category: "Bottles",
      image: "https://static.wixstatic.com/media/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg",
      bestSeller: false,
      sale: true,
    },
    {
      name: "Bamboo Straw Set",
      price: 3.00,
      category: "Accessories",
      image: "https://static.wixstatic.com/media/c837a6_9dce3884fcad4bf48229c911395f2e0d~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9dce3884fcad4bf48229c911395f2e0d~mv2.jpg",
      bestSeller: true,
      sale: false,
    },
    {
      name: "Organic Cotton Tote",
      price: 12.00,
      category: "Bags",
      image: "https://static.wixstatic.com/media/c837a6_c4b10cbdda5049acb53cb7597aa2bd14~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c4b10cbdda5049acb53cb7597aa2bd14~mv2.jpg",
      bestSeller: false,
      sale: true,
    }
  ];

  const data = {
    result: products,
    showPagination: [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    totalRecords: 32
  }

  const categories = [
    { name: "Bath" },
    { name: "Kitchen" },
    { name: "New" },
    { name: "On the Go" },
    { name: "Sale" },
  ];

  return (
    <div className='w-full px-10 text-[#403F2B]'>
      <p className='text-6xl fraunces'>{category == null ? "All Products" : category}</p>
      <div className="flex justify-end w-full">
        <div className='hidden md:flex w-fit items-center gap-3 py-5'>
          <p>Sort by:</p>
          <Select
            className="w-[200px] "
            aria-label='--Select--'
            // label="--Select--" 
            size="sm"
            defaultSelectedKeys={[animals[0].key]}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className='w-full'>
          <p className='underline' onClick={() => { setOpenFilter(true) }}>Filter & Sort</p>
          <div className={`${openFilter ? 'h-screen opacity-100' : 'h-0 opacity-0'} w-full bg-white transition-all duration-500 ease-in-out z-20 fixed inset-0 overflow-hidden px-5 `}>
            <div className="bg-white w-full h-full p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">Filter & Sort</h2>
                <button className="text-gray-600" onClick={() => { setOpenFilter(false) }}>Close</button>
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <p className="mb-2">Sort by:</p>
                  <Select
                    className="w-full"
                    aria-label='--Select--'
                    size="sm"
                    defaultSelectedKeys={[animals[0].key]}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.key}>{animal.label}</SelectItem>
                    ))}
                  </Select>
                </div>
                <Accordion>
                  <AccordionItem key="1" aria-label="Accordion 1" title="Price">
                    <Slider
                      className="max-w-md"
                      formatOptions={{
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }}
                      label="Select a budget"
                      maxValue={10000}
                      minValue={50}
                      step={10}
                      // value={value}
                      // onChange={setValue}
                      size="sm"
                    />
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title="Category">
                    <RadioGroup>
                      {categories.map((cat, index) => (
                        <Radio key={index} value={cat.name}>{cat.name}</Radio>
                      ))}
                    </RadioGroup>
                  </AccordionItem>
                </Accordion>
                {/* Additional filters can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={product.image} alt={product.name} className="object-cover mb-4" />
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-md">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <Paginations
        totalRecords={data.totalRecords}
        totalPages={Math.ceil(data.totalRecords / limit)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        tableDataLength={data.result?.length}
        showPagination={data.showPagination}
      />
    </div>
  )
}

export default Listing
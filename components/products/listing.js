"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Accordion, AccordionItem, Button, Radio, RadioGroup, Select, SelectItem, Slider } from '@heroui/react'
import Paginations from '../pagination'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CryptoJS from "crypto-js";

const Listing = ({ budgetValue, setBudgetValue, categories, categorySelected, setCategorySelected, filterData }) => {
  // const searchParams = useSearchParams()
  // const category = searchParams.get('category');
  const router = useRouter();
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [tempBudget, setTempBudget] = useState(budgetValue);
  const [tempCategory, setTempCategory] = useState(categorySelected);
  const [encryptedFilter, setEncryptedFilter] = useState("");

  let crypto_key = process.env.NEXT_PUBLIC_CRYPTO_KEY;

  const sorting = [
    { key: "recommended", label: "Recommended" },
    { key: "newest", label: "Newest" },
    { key: "low_to_high", label: "Price (low to high)" },
    { key: "high_to_low", label: "Price (high to low)" },
    { key: "a_to_z", label: "Name A-Z" },
    { key: "z_to_a", label: "Name Z-A" },
  ];
  const [sort, setSort] = useState(new Set([sorting[0].key]));
  const [tempSort, setTempSort] = useState(new Set([sorting[0].key]));


  const products = [
    {
      id: 1,
      name: "Eco Glass",
      price: 5.50,
      category: "Glassware",
      image: "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
      bestSeller: true,
      sale: false,
    },
    {
      id: 2,
      name: "Recycled Bottle",
      price: 8.00,
      category: "Bottles",
      image: "https://static.wixstatic.com/media/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg",
      bestSeller: false,
      sale: true,
    },
    {
      id: 3,
      name: "Bamboo Straw Set",
      price: 3.00,
      category: "Accessories",
      image: "https://static.wixstatic.com/media/c837a6_9dce3884fcad4bf48229c911395f2e0d~mv2.jpg/v1/fill/w_449,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9dce3884fcad4bf48229c911395f2e0d~mv2.jpg",
      bestSeller: true,
      sale: false,
    },
    {
      id: 4,
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
      4
    ],
    totalRecords: 32
  }

  const matchedCategory = categories.find(
    (cat) => cat.id === categorySelected
  );

  const handleApply = () => {
    setBudgetValue(tempBudget);
    setCategorySelected(tempCategory);
    setSort(tempSort);
    setOpenFilter(false);
  };
  const handleClear = () => {
    router.replace('/products', undefined, { shallow: true });
    setBudgetValue([50, 10000]);
    setCategorySelected(categories[0]?.id);
    setSort(new Set([sorting[0].key]));
    setTempBudget([50, 10000]);
    setTempCategory(categories[0]?.id);
    setTempSort(new Set([sorting[0].key]));
    setOpenFilter(false);
  };
  const base64UrlEncode = (str) => {
    return str
      .replace(/\+/g, "-")   // + -> -
      .replace(/\//g, "_")   // / -> _
      .replace(/=+$/, "");   // remove ending =
  }

  useEffect(() => {
    const filter = {
      budget: budgetValue,
      category: categorySelected,
      sort: Array.from(sort)[0],
      page: currentPage,
      limit: limit,
    };

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(filter), crypto_key).toString();
    const encoded = base64UrlEncode(encrypted);
    setEncryptedFilter(encoded);
  }, [budgetValue, categorySelected, sort, currentPage, limit]);

  useEffect(() => {
    if (filterData) {
      setSort(new Set([filterData.sort]));
      setCurrentPage(filterData.page);
      setTempSort(new Set([filterData.sort]));
      setTempCategory(filterData.category);
      setTempBudget(filterData.budget);
      setLimit(filterData.limit);
    }
  }, [filterData]);

  if (!encryptedFilter) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full sm:px-10 text-[#403F2B]'>
      <p className='text-4xl xl:text-6xl fraunces'>{matchedCategory?.name || "All products"}</p>
      <div className="flex justify-end w-full">
        <div className='hidden md:flex w-fit items-center gap-3 py-5'>
          <p>Sort by:</p>
          <Select
            className="w-[200px] "
            aria-label='--Select--'
            size="sm"
            selectedKeys={sort}
            onSelectionChange={setSort}
          >
            {sorting.map((option) => (
              <SelectItem key={option.key}>{option.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className='relative md:hidden w-full py-5'>
          <p className='underline w-fit float-right' onClick={() => { setOpenFilter(true) }}>Filter & Sort</p>
          <div className={`${openFilter ? 'h-screeen opacity-100' : 'h-0 opacity-0'} w-full helvetica bg-white transition-all duration-500 ease-in-out z-20 fixed inset-0 overflow-hidden px-5 `}>
            <div className="bg-white w-full h-full p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">Filter & Sort</h2>
                <button className="text-gray-600" onClick={() => { setOpenFilter(false) }}><XMarkIcon className='w-5 h-5' /></button>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='w-full'>
                  <p className="mb-2 w-fit">Sort by:</p>
                  <Select
                    className="w-full"
                    aria-label='--Select--'
                    size="sm"
                    selectedKeys={tempSort}
                    onSelectionChange={setTempSort}
                  >
                    {sorting.map((option) => (
                      <SelectItem key={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="w-[96%] border-b h-1 border-gray-200"></div>

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
                      value={tempBudget}
                      onChange={setTempBudget}
                      size="sm"
                    />
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title="Category">
                    <RadioGroup
                      value={tempCategory}
                      onValueChange={setTempCategory}
                    >
                      {categories.map((cat, index) => (
                        <Radio key={index} value={cat.id} size="sm">{cat.name}</Radio>
                      ))}
                    </RadioGroup>
                  </AccordionItem>
                </Accordion>
                <div className='absolute bottom-5 w-full flex gap-5 px-10'>
                  <Button
                    color="default"
                    variant="solid"
                    className="w-full "
                    onPress={handleClear}
                  >
                    Clear Filters
                  </Button>
                  <Button
                    color="success"
                    variant="solid"
                    className="w-full text-white font-semibold"
                    onPress={handleApply}
                  >
                    Apply Filters
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-10 w-full'>
        {products.map((product, index) => (
          <Link
            href={`/products/${product.id}?filter=${encryptedFilter}`}
            key={index} className="relative flex flex-col items-center">
            <img src={product.image} alt={product.name} className="object-cover mb-4" />
            {product.bestSeller && <p className="px-3 py-1 bg-[#403f2b] z-10 text-white absolute top-3 left-3 rounded-3xl text-xs">Best Seller</p>}
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-md">${product.price.toFixed(2)}</p>
          </Link>
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
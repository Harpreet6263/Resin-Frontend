"use client"
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = ({ categories, categorySelected, productName, filter }) => {

  const router = useRouter();
  const matchedCategory = categories.find(
    (cat) => cat.id === categorySelected
  );


  const test = () => {
    if (!filter || filter == null) {
      router.push(`/products`);
    } else {
      router.push(`/products?filter=${filter}`);
    }
  }

  return (
    <div className='helvetica text-[#403F2B]'>
      <Breadcrumbs className="max-sm:[&_*]:text-[#403F2B] max-sm:[&_*]:!text-opacity-100 max-sm:[&_*]:!opacity-100">
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        {matchedCategory && <BreadcrumbItem><p onClick={() => { test() }}>{matchedCategory?.name}</p></BreadcrumbItem>}
        {productName && <BreadcrumbItem>{productName}</BreadcrumbItem>}
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
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
    if (!filter || filter == null) return;
    router.push(`/products?filter=${filter}`);
  }

  return (
    <div className='helvetica'>
      <Breadcrumbs>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem><p onClick={() => { test() }}>{matchedCategory?.name}</p></BreadcrumbItem>
        {productName && <BreadcrumbItem>{productName}</BreadcrumbItem>}
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
"use client"
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Breadcrumb = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    return (
        <div className='helvetica'>
            <Breadcrumbs>
                <BreadcrumbItem href='/'>Home</BreadcrumbItem>
                <BreadcrumbItem>{category == null?"All Products":category}</BreadcrumbItem>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb
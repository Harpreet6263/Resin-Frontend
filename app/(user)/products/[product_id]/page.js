'use client';
import React from 'react'
import { useParams } from 'next/navigation';
import Products from '@/components/products/products';

const page = () => {
    const { product_id } = useParams();
    return (
        <Products product_id={product_id} />
    )
}

export default page
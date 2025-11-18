import Link from 'next/link'
import React from 'react'
import CryptoJS from "crypto-js";
import { useRouter } from 'next/navigation';

const Menu = ({ setIsMenuOpen }) => {
  const router = useRouter();
  let crypto_key = process.env.NEXT_PUBLIC_CRYPTO_KEY;

  const categories = [
    { id: 2, name: "Bath" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "New" },
    { id: 5, name: "On the Go" },
    { id: 6, name: "Sale" },
  ];

  const base64UrlEncode = (str) => {
    return str
      .replace(/\+/g, "-")   // + -> -
      .replace(/\//g, "_")   // / -> _
      .replace(/=+$/, "");   // remove ending =
  }

  const redirect = (category_id) => {
    const filter = {
      budget: [50, 10000],
      category: category_id,
      sort: "recommended",
      page: 1,
      limit: 10,
    };

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(filter), crypto_key).toString();
    const encoded = base64UrlEncode(encrypted);
    setIsMenuOpen(false);
    router.push(`/products?filter=${encoded}`);
  }



  return (
    <div className='fraunces text-[#403F2B] flex w-full sm:justify-around sm:pt-20 py-10'>
      <div className='text-3xl sm:text-5xl flex flex-col gap-9'>
        <Link href="/" onClick={() => { setIsMenuOpen(false) }} className='cursor-pointer'>Home</Link>
        <Link href="/products" onClick={() => { setIsMenuOpen(false) }} className='cursor-pointer'>Shop All</Link>
        <p className='cursor-pointer' onClick={() => { setIsMenuOpen(false) }}>Our Mission</p>
        <p className='cursor-pointer' onClick={() => { setIsMenuOpen(false) }}>Contact</p>
        <p className='cursor-pointer' onClick={() => { setIsMenuOpen(false) }}>FAQ</p>
      </div>
      <div className='sm:flex flex-col gap-10 hidden text-3xl'>
        <p>Shop Collections:</p>
        <div className='flex flex-col gap-6'>
          {categories.map((cat) => (
            <p
              key={cat.id
              }
              className='cursor-pointer'
              onClick={() => { redirect(cat.id) }}
            >
              {cat.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Custom Arrows using Heroicons
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-3 top-2/5 -translate-y-1/2 z-10 cursor-pointer 
               bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
  >
    <ChevronRightIcon className="h-6 w-6 text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-3 top-2/5 -translate-y-1/2 z-10 cursor-pointer 
               bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
  >
    <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
  </div>
);

const CoruselComponent = ({ images }) => {
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter');

  const [slidesToShow, setSlidesToShow] = useState(1);

  const updateSlides = () => {
    const width = window.innerWidth;
    if (width >= 1024) setSlidesToShow(4);
    else if (width >= 768) setSlidesToShow(3);
    else if (width >= 500) setSlidesToShow(2);
    else setSlidesToShow(1);
  };

  useEffect(() => {
    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative  mx-auto">
      {!images ? (
        <Slider {...settings}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="px-4">
              <div className="h-74 xl:h-96 relative space-y-3">
                <div className="h-60 xl:h-80 w-full bg-gray-200 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                </div>
                <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mx-1" />
                <div className="h-4 w-1/3 bg-gray-300 rounded-md animate-pulse mx-1" />
              </div>
            </div>
          ))}
        </Slider>

      ) : (
        <Slider {...settings}>
          {images.map((img, index) => (
            <Link
                href={`/products/${img.id}${filter ? `?filter=${filter}` : ''}`}
            key={index} className="px-4 relative helvetica">
              <div
                className="h-full relative cursor-pointer">
                <img
                  src={img.img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl bg-gray-200 overflow-hidden"
                />
                {img.bestseller && <p className="px-3 py-1 bg-[#403f2b] z-10 text-white absolute top-3 left-3 rounded-3xl text-xs">Best Seller</p>}
                <p className="text-center text-lg mx-5 text-[rgb(64_63_43)] mt-5">{img.name}</p>
                <p className=" text-center mx-5 text-[rgb(64_63_43)]">${img.price}</p>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CoruselComponent;

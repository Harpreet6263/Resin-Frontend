"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react"

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

const Corusel = () => {
  const [loading, setLoading] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [images, setImages] = useState([
    {
      img: "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
      bestseller: true,
      name: "Eco Glass",
      price: "5.50"
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg",
      bestseller: false,
      name: "Seawood Natural Soap",
      price: "6.50"
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg",
      bestseller: false,
      name: "Stainless Steel Bottle",
      price: "25.00"
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg",
      bestseller: false,
      name: "Compostable Kitchen Sponges",
      price: "7.00"
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_00f5773295d145f8959baf2957fd3f51~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_00f5773295d145f8959baf2957fd3f51~mv2.jpg",
      bestseller: false,
      name: "Wood Brush",
      price: "7.00"
    }
  ])

  // Simulate loading delay (you could replace this with actual data fetch)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
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
  const transition = {
    duration: 1,
    delay: 0.5
  }
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}        // start hidden and slightly down
        whileInView={{ opacity: 1, y: 0 }}     // animate when in viewport
        viewport={{ once: true, amount: 0.3 }} // animate once when 50% visible
        transition={transition}
        className="text-center text-4xl  mb-6 sm:mb-10 text-[#403f2b]"
      >New In</motion.p>
      <div className="relative  mx-auto px-6">
        {loading ? (
          <Slider {...settings}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="px-4">
                <div className="h-74 xl:h-96 relative space-y-3">
                  {/* Image skeleton */}
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
              <div key={index} className="px-4 helvetica">
                <div className="h-full relative cursor-pointer">
                  <img
                    src={img.img}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl bg-gray-200 rounded-3xl overflow-hidden"
                  />
                  {img.bestseller && <p className="px-3 py-1 bg-[#403f2b] z-10 text-white absolute top-3 left-3 rounded-3xl text-xs">Best Seller</p>}
                  <p className="text-center text-lg mx-5 text-[rgb(64_63_43)] mt-5">{img.name}</p>
                  <p className=" text-center mx-5 text-[rgb(64_63_43)]">${img.price}</p>
                </div>
              </div>
            ))}
          </Slider>

        )}
      </div>
    </>
  );
};

export default Corusel;

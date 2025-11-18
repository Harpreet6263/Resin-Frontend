"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"
import CoruselComponent from "../CoruselComponent/coruselComponent";

const Corusel = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => setImages([
    {
      id: 1,
      img: "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
      bestseller: true,
      name: "Eco Glass",
      price: "5.50"
    },
    {
      id: 2,
      img: "https://static.wixstatic.com/media/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg",
      bestseller: false,
      name: "Seawood Natural Soap",
      price: "6.50"
    },
    {
      id: 3,
      img: "https://static.wixstatic.com/media/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg",
      bestseller: false,
      name: "Stainless Steel Bottle",
      price: "25.00"
    },
    {
      id: 4,
      img: "https://static.wixstatic.com/media/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a568444e48684d32bb82ed0222281565~mv2.jpg",
      bestseller: false,
      name: "Compostable Kitchen Sponges",
      price: "7.00"
    },
    {
      id: 5,
      img: "https://static.wixstatic.com/media/c837a6_00f5773295d145f8959baf2957fd3f51~mv2.jpg/v1/fill/w_246,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_00f5773295d145f8959baf2957fd3f51~mv2.jpg",
      bestseller: false,
      name: "Wood Brush",
      price: "7.00"
    }
  ]), 2000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="relative px-6">
        <CoruselComponent images={images} />
      </div>

    </>
  );
};

export default Corusel;

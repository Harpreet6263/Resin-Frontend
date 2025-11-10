"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Accordion, AccordionItem, Slider } from "@heroui/react";

const Sidebar = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category"); // ✅ renamed for clarity

  const categories = [
    { name: "Bath" },
    { name: "Kitchen" },
    { name: "New" },
    { name: "On the Go" },
    { name: "Sale" },
  ];
  const [value, setValue] = useState([50, 10000])

  return (
    <div className="w-[280px] hidden md:flex flex-col gap-5 text-[#403F2B]">
      <p className="text-2xl fraunces ">Browse by</p>
      <div className="w-full border-b-2 h-1 border-gray-200"></div>
      <div className="flex flex-col gap-3 mb-4">
        <Link
          href="/products"
          className={`block hover:underline ${!selectedCategory ? "underline" : ""}`}
        >
          All Products
        </Link>

        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            className={`block hover:underline ${selectedCategory === cat.name ? "underline" : ""
              }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <div>
        <p className="pb-5 text-2xl fraunces  ">Filter by</p>
        <div className="w-full border-b-2 h-1 border-gray-200"></div>
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
              value={value}
              onChange={setValue}
              size="sm"
            />
          </AccordionItem>
        </Accordion>
        <div className="w-full border-b-2 h-1 border-gray-200"></div>
      </div>
    </div>
  );
};

export default Sidebar;

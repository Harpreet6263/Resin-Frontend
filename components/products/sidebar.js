"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Accordion, AccordionItem, Slider } from "@heroui/react";

const Sidebar = ({ budgetValue, setBudgetValue, categories, categorySelected, setCategorySelected }) => {
  // const searchParams = useSearchParams();
  // const selectedCategory = searchParams.get("category");

  return (
    <div className="w-[280px] hidden md:flex flex-col gap-5 text-[#403F2B]">
      <p className="text-2xl fraunces ">Browse by</p>
      <div className="w-full border-b-2 h-1 border-gray-200"></div>
      <div className="flex flex-col gap-3 mb-4">
        {categories.map((cat, index) => (
          <p
            key={index}
            className={`block hover:underline cursor-pointer ${categorySelected === cat.id ? "underline" : ""
              }`}
            onClick={() => { setCategorySelected(cat?.id) }}
          >
            {cat.name}
          </p>
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
              value={budgetValue}
              onChange={setBudgetValue}
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

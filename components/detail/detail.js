import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Accordion, AccordionItem, Button } from '@heroui/react';
import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";

const Detail = ({ product_id, setProductName }) => {
  const [detail, setDetail] = useState({});
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (product_id == 1) {
      var data = {
        id: 1,
        name: "Eco Glass",
        images: [
          "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_500,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg"
        ],
        price: 5.50,
        quantity: 10,
        description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
        info: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        shipping_info: "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
      }
      setDetail(data)
      setProductName(data.name)

      const galleryItems = data?.images?.map((img) => ({
        original: img,
        thumbnail: img,
        loading: "lazy",
        // sizes: "100%", 
      }));
      setImages(galleryItems);
    } else if (product_id == 2) {
      var data = {
        id: 2,
        name: "Recycled Bottle",
        images: [
          "https://images.pexels.com/photos/34585964/pexels-photo-34585964.jpeg",
          "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_500,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
          "https://images.pexels.com/photos/30936838/pexels-photo-30936838.jpeg",
        ],
        price: 5.50,
        quantity: 10,
        description: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
        info: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        shipping_info: "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
      }
      setDetail(data)
      setProductName(data.name)
      const galleryItems = data?.images?.map((img) => ({
        original: img,
        thumbnail: img,
        loading: "lazy",
        // sizes: "100%", 
      }));
      setImages(galleryItems);
    }
  }, [product_id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const increaseQuantity = () => {
    if (quantity < detail.quantity) {
      setQuantity(quantity + 1);
    }
  }


  return (
    <div className='flex flex-col sm:flex-row w-full gap-10 helvetica text-[#403F2B] py-8'>
      <div className='w-full sm:w-1/2 '>
        <ImageGallery items={images} showNav={false} thumbnailPosition="bottom"
        />
        <style>
          {`
        .image-gallery-image {
          width: 100%;
          height: 50vh;
          object-fit: contain;
        }
        .image-gallery-content.fullscreen .image-gallery-slide-wrapper,
        .image-gallery-content.fullscreen .image-gallery-swipe,
        .image-gallery-content.fullscreen .image-gallery-slide,
        .image-gallery-content.fullscreen .image-gallery-image {
          height: 100% !important;   
        }
        .image-gallery-thumbnails-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: max-content;
          margin: auto;
        }
        .image-gallery-thumbnail {
          width: 80px !important;
          height: 80px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .image-gallery-thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;  
          object-position: center center;
        }
        @media (max-width: 640px) {
          .image-gallery-thumbnail {
            width: 60px !important;
            height: 60px !important;
          }
        }
  `}
        </style>
        <p className='my-14 hidden sm:block'>{detail.description}</p>
      </div>
      <div className='w-full sm:w-1/2 flex flex-col gap-5 sm:gap-10'>
        <p className='text-3xl font-bold'>{detail.name}</p>
        <p className='text-2xl font-extralight '>${detail.price?.toFixed(2)}</p>
        <div>
          <p className='text-sm mb-1'>Quantity *</p>
          <div className=' flex items-center gap-4 border w-fit overflow-hidden rounded-lg'>
            <div className='bg-[#403F2B]'>
              <MinusIcon className='w-6 h-6 m-2 text-white cursor-pointer' onClick={() => { decreaseQuantity() }} />
            </div>
            <span className='font-bold'>{quantity}</span>
            <div className='bg-[#403F2B]'>
              <PlusIcon className='w-6 h-6 m-2 text-white cursor-pointer' onClick={() => { increaseQuantity() }} />
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-4 sm:mt-0 gap-2'>
          <Button className='bg-[#403F2B] hover:underline text-white w-full max-w-[350px] rounded-full'>Add to cart</Button>
          <Button className='border border-[#403F2B] hover:underline bg-transparent w-full max-w-[350px] rounded-full'>Buy Now</Button>
        </div>
        <p className='block sm:hidden mt-4'>{detail.description}</p>

        <Accordion defaultExpandedKeys={["1"]}>
          <AccordionItem key="1" aria-label="Accordion 1" title="PRODUCT INFO" classNames={{
            title: "font-semibold"
          }}>
            {detail?.info}
          </AccordionItem>
          {detail.shipping_info && <AccordionItem key="2" aria-label="Accordion 2" title="SHOPPING INFO" classNames={{
            title: "font-semibold"
          }}>
            {detail?.shipping_info}
          </AccordionItem>}
        </Accordion>

      </div>

    </div>
  )
}

export default Detail
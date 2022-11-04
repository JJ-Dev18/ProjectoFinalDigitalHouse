import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

import './styles/product-gallery.css'

const ProductGallery = ({ images }) => {
  return (
    <div className='product-gallery-container'>
      <Swiper
        className='gallery'
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        {
          images.map(
            (img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={img} alt={'View '+i} />
                </SwiperSlide>
              )
            }
          )
        }

      </Swiper>
    </div>
  )
}

export default ProductGallery;

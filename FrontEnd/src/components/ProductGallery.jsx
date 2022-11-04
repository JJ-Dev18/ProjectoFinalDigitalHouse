import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

import './styles/product-gallery.css'

const ProductGallery = ({ images }) => {
  return (
    <div className='product-gallery-container'>
      <Swiper
        className='gallery'
        pagination={{
          type: "fraction",
        }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {
          images.map(
            (img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={img} alt='Hotel' />
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

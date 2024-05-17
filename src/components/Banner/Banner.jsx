
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import slid1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

const Banner = () => {
  return (
    <div className='mb-6'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        pagination={{
          clickable: true,
        }}

        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slid1} alt="" />
          <p className='text-center mx-auto uppercase text-yellow-500 font-semibold -mt-16'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className='text-center uppercase text-yellow-500 font-semibold -mt-16'>Pitza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className='text-center uppercase text-yellow-500 font-semibold -mt-16'>Saouse</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className='text-center uppercase text-white font-semibold -mt-16'>desert</p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
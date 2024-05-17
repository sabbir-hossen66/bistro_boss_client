
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slid1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'

import SectionTitle from '../SectionTitle/SectionTitle';

const Banner = () => {
  return (
    <section className='mb-8'>

      <SectionTitle
        subHeading={"From 11 am to 10 pm"}
        heading={'Order Onlie'}>

      </SectionTitle>

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
    </section>
  );
};

export default Banner;
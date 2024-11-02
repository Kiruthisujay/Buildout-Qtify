import React, { useEffect } from 'react'
// import {Navigation} from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeft/CarouselLeft'
import CarouselRight from './CarouselRight/CarouselRight'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Initialize Swiper modules
Swiper.use([Navigation, Pagination]);



const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
            <Controls data={data} />
            <CarouselLeft />
            <CarouselRight />
            {data.map(item => (
                <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel
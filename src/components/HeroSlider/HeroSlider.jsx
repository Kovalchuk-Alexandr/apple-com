"use client";

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.module.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { slides } from '@data/hero-slider';


const HeroSlider = () => {
	return (
		<Swiper
			id="hero-slider"
			// effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			speed={1000}
			loop={true}
			modules={[Autoplay, Pagination]}
			spaceBetween={30}
			pagination={{ clickable: true }}
			// coverflowEffect={{
			// 	rotate: 50,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 1,
			// 	slideShadows: true,
			// }}
			// pagination={true}
			// navigation
			// scrollbar={{ draggable: true }}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
			className="mySwiper"
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<Image
						// src={slide.image}
						alt={slide.alt}
						{...slide}
						width={1250}
						height={668}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1250px"
						priority
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlider;

"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import { carousel } from '@data/carousel';

import styles from './styles.module.css';
import ContentSlide from './ContentSlide';
import ImgSlide from './ImgSlide';


const Carousel = () => {

	return (
		<Swiper
			id="carousel-slider"
			// grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				// waitForTransition: false,
				disableOnInteraction: false,
			}}
			speed={8000}
			loop={true}
			modules={[Autoplay]}
			spaceBetween={15}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
			className="mySwiper"
		>
			{carousel.map((slide) => (
				<SwiperSlide key={slide.id}>
					{slide?.type === 'content' && <ContentSlide slide={slide} />}
						{/* (
						<div
							className={`${styles.slideContent} ${className}`}
							style={{ ...slide.styles }}
							onPointerEnter={() => setHover(true)}
							onPointerLeave={() => setHover(false)}
						>
							<div className={styles.img}>
								<Image
									src={slide.src}
									alt={slide.alt}
									width={196}
									height={196}
									sizes="(max-width: 768px) 114px, 196px"
								/>
							</div>
							<div className={styles.title}>{slide.title}</div>
							<div className={styles.bage}>
								{slide.icon === 'FitnessPlus' && (
									<FitnessPlus />
								)}
								{slide.icon === 'Music' && <Music />}
								{slide.icon === 'Arcade' && <Arcade />}
							</div>
							<div
								className={`${styles.link} button-inset button-inset--full`}
							>
								<a href={slide.href}>{slide.linkText}</a>
							</div>
						</div>
						) */}

					{slide?.type !== 'content' && <ImgSlide slide={slide} />}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;

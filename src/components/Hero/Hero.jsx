"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const getBreakpoint = (width) => {
	if (width <= 768) return 'mobile';
	if (width <= 1068) return 'tablet';
	return 'desktop';
};

const heroImages = {
	desktop: {
		src: '/img/hero/iphone-17-pro.jpg',
		quality: [75, 95],
	},
	tablet: {
		src: '/img/hero/iphone-17-pro-tablet.jpg',
		quality: [75, 90],
	},
	mobile: {
		src: '/img/hero/iphone-17-pro-mobile.jpg',
		quality: [75, 85],
	},
};

const Hero = () => {

	const [breakpoint, setBreakpoint] = useState('desktop');

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth));
		};

		handleResize(); // инициализация при монтировании

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { src, quality } = heroImages[breakpoint];

	return (
		<div className={styles.hero}>
			Hero
			<figure
				className={styles.hero__imageContainer}
				role="img"
				aria-label="iPhone 17 Pro, back exterior, deep blue color, Pro Fusion camera system in top left corner, Apple logo in center, iPhone 17, back exterior, white color, Dual Fusion camera system in top left corner, Apple logo in center, iPhone 17e, back exterior, soft pink color, Fusion camera system in top left corner, Apple logo in center, iPhone Air, side, titanium frame profile, Fusion camera system in top left corner"
			>
				{/* <Image
					src="/img/hero/iphone-17-pro.jpg "
					alt="Hero Image"
					fill
					priority
					objectFit="cover"
					quality={95}
				/> */}

				{/* <Image
					src="/img/hero/iphone-17-pro-mobile.jpg "
					alt="Hero Image"
					fill
					priority
					objectFit="cover"
					quality={85}
				/> */}
				<Image
					src={src}
					alt="Hero Image"
					fill
					priority
					objectFit="cover"
					quality={quality}
				/>
			</figure>
		</div>
	);
}

export default Hero;

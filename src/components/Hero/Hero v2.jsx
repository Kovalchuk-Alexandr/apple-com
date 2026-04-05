"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Button from '../Button';

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

const Hero = ({ data }) => {
	/* Чтобы подгружался правильный img вместо useState("desktop"), если в wind
	проверяем размер экрана */
	// const [breakpoint, setBreakpoint] = useState(() =>
	// 	typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : null,
	// );
	const [breakpoint, setBreakpoint] = useState(false);
	const [imgData, setImgData] = useState({ src: '', quality: [] });

	// console.log('BP at start: ', breakpoint);

	console.log('data: ', data);

	const {
		type,
		title,
		subtitle,
		imageDesktop,
		imageTablet,
		imageMobile,
		altText,
		buttons,
	} = data;

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth));
			// console.log('BP at useEffect: ', breakpoint);
			// if (breakpoint) {
			// 	console.info('heroImages: ', heroImages[breakpoint]);
			// 	const { srcImg, qualityImg } = heroImages[breakpoint];
			// 	setImgData((prevData) => ({
			// 		...prevData,
			// 		src: srcImg,
			// 		quality: qualityImg,
			// 	}));
			// }
		};

		handleResize(); // инициализация при монтировании
		// console.info('imgData: ', imgData);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	// Пока брейкпоинт не определён — ничего не рендерим
	if (!breakpoint) return null;
	// console.info('imgData: ', imgData);
	const { src, quality } = heroImages[breakpoint];

	let additionalClass = '';
	if (type === 'white') {
		additionalClass = styles['hero--white'];
	}

	return (
		<div className={`${styles.hero} ${additionalClass}`}>
			<div className={styles.hero__textContainer}>
				<h1 className={styles.hero__title}>iPhone 17 Pro{title}</h1>
				<p className={styles.hero__subtitle}>All out Pro{subtitle}</p>
				<div className={styles.hero__links}>
					<Button title="Learn more" />
					<Button title="Buy" type="outline" />
				</div>
			</div>

			<figure
				className={styles.hero__imageContainer}
				role="img"
				aria-label="iPhone 17 Pro, back exterior, deep blue color, Pro Fusion camera system in top left corner, Apple logo in center, iPhone 17, back exterior, white color, Dual Fusion camera system in top left corner, Apple logo in center, iPhone 17e, back exterior, soft pink color, Fusion camera system in top left corner, Apple logo in center, iPhone Air, side, titanium frame profile, Fusion camera system in top left corner"
			>
				<Image
					src={src}
					alt="Hero Image"
					fill
					priority
					style={{ objectFit: 'cover' }}
					quality={quality}
				/>
			</figure>
		</div>
	);
};;;
export default Hero;

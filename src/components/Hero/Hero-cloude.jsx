"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const getBreakpoint = (width) => {
	if (width <= 998) return "mobile";
	if (width <= 1068) return "tablet";
	return "desktop";
};

const heroImages = {
	desktop: {
		src: "/img/hero/iphone-17-pro.jpg",
		quality: 95,
	},
	tablet: {
		src: "/img/hero/iphone-17-pro-tablet.jpg",
		quality: 90,
	},
	mobile: {
		src: "/img/hero/iphone-17-pro-mobile.jpg",
		quality: 85,
	},
};

const Hero = () => {
	const [breakpoint, setBreakpoint] = useState("desktop");

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth));
		};

		handleResize(); // инициализация при монтировании

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { src, quality } = heroImages[breakpoint];

	return (
		<div className={styles.hero}>
			<figure
				className={styles.hero__imageContainer}
				role="img"
				aria-label="iPhone 17 Pro hero image"
			>
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
};

export default Hero;

"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const Hero = () => {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		}
		handleResize();
	});

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

				<Image
					src="/img/hero/iphone-17-pro-mobile.jpg "
					alt="Hero Image"
					fill
					priority
					objectFit="cover"
					quality={85}
				/>
			</figure>

		</div>
	);
}

export default Hero;

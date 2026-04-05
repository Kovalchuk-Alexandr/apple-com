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

const Hero = ({ data }) => {
	const [breakpoint, setBreakpoint] = useState(() =>
		typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : null,
	);

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

	// Строим маппинг из данных пропа — теперь src всегда актуален
	const heroImages = {
		desktop: { src: imageDesktop, quality: 95 },
		tablet:  { src: imageTablet  || imageDesktop, quality: 90 },
		mobile:  { src: imageMobile  || imageDesktop, quality: 85 },
	};

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth));
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (!breakpoint) return null;

	const { src, quality } = heroImages[breakpoint];

	const additionalClass = type === 'white' ? styles['hero--white'] : '';

	return (
		<div className={`${styles.hero} ${additionalClass}`}>
			<div className={styles.hero__textContainer}>
				<h1 className={styles.hero__title}>{title}</h1>
				<p className={styles.hero__subtitle}>{subtitle}</p>
				<div className={styles.hero__links}>
					{buttons.map((button, index) => (
						<Button
							key={index}
							title={button.title}
							type={button.type}
							link={button.link}
						/>
					))}
				</div>
			</div>

			<figure
				className={styles.hero__imageContainer}
				role="img"
				aria-label={altText}
			>
				<Image
					src={src}
					alt={altText}
					fill
					priority
					style={{ objectFit: 'cover' }}
					quality={quality}
				/>
			</figure>
		</div>
	);
};

export default Hero;

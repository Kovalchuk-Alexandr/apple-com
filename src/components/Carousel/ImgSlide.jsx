import { useState } from 'react';
import Image from 'next/image';
import { FitnessPlus, Music, Arcade } from '@components/icons';
import styles from './styles.module.css';

const ImgSlide = ({ slide }) => {

	return (
		<div
			className={styles.slideImg}
			style={{ ...slide.styles }}
		>
			<div className={styles.img}>
				<Image
					src={slide.src}
					alt={slide.alt}
					width={417}
					height={236}
					sizes="(max-width: 768px) 238px, (max-width: 1200px) 286px, 417px"
				/>
			</div>
			<div className={styles.titleAbsolute}>{slide.title}</div>
			<div className={styles.bage}>
				{slide.icon === 'FitnessPlus' && <FitnessPlus />}
				{slide.icon === 'Music' && <Music />}
				{slide.icon === 'Arcade' && <Arcade />}
			</div>
			{/* Затемнение */}
			<div className={styles.overlay} /> {/* затемнение */}
			{/* Кнопка — только при ховере */}
			<a
				href={slide.href}
				className={`${styles.link} button-inset button-inset--full`}
			>
				{slide.linkText}
			</a>
			{/* <div className={`${styles.link} button-inset button-inset--full`}>
				<a href={slide.href}>{slide.linkText}</a>
			</div> */}
		</div>
	);
};

export default ImgSlide;

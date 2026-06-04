import { useState } from 'react';
import Image from 'next/image';
import { FitnessPlus, Music, Arcade } from '@components/icons';
import styles from './styles.module.css';

const ContentSlide = ({ slide }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className={styles.slideContent}
			style={{ ...slide.styles }}
			// onPointerEnter={() => setHover(true)}
			// onPointerLeave={() => setHover(false)}
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
				{slide.icon === 'FitnessPlus' && <FitnessPlus />}
				{slide.icon === 'Music' && <Music />}
				{slide.icon === 'Arcade' && <Arcade />}
			</div>
			{/* Затемнение */}
			{/* {hover && <div className="glass-effect" style={{ inset: 0 }} />} */}
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
			{/* {hover && (
				<div
					className={`${styles.link} button-inset button-inset--full`}
				>
					<a href={slide.href}>{slide.linkText}</a>
				</div>
			)} */}
		</div>
	);
};

export default ContentSlide;

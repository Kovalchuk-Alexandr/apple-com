'use client';

import styles from './mobile.module.css';

export function MobileBtn({ isOpen, onClick }) {
	return (
		<button
			className={`${styles.btn} ${isOpen ? styles.btnActive : ''}`}
			onClick={onClick}
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={isOpen}
		>
			{/* SVG с тремя линиями. CSS трансформирует их в крестик */}
			<svg
				className={styles.icon}
				width="18"
				height="18"
				viewBox="0 0 18 18"
				aria-hidden="true"
			>
				<line className={styles.lineTop} x1="0" y1="3" x2="18" y2="3" />
				<line className={styles.lineMid} x1="0" y1="9" x2="18" y2="9" />
				<line
					className={styles.lineBot}
					x1="0"
					y1="15"
					x2="18"
					y2="15"
				/>
			</svg>
		</button>
	);
}

/* Почему не <animate> внутри SVG?
   SMIL-анимации плохо синхронизируются с React state.
   CSS-transition реагирует на смену className мгновенно. */

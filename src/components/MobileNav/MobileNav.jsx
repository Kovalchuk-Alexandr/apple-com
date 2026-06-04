'use client';

import { navItems } from '@/data/navItems';
import { MobileBtn } from './MobileBtn';
import styles from './mobile.module.css';

// const navItems = [
// 	{ name: 'Store', href: '#!' },
// 	{ name: 'Mac', href: '#!' },
// 	{ name: 'iPad', href: '#!' },
// 	{ name: 'iPhone', href: '#!' },
// 	{ name: 'Watch', href: '#!' },
// 	{ name: 'Vision', href: '#!' },
// 	{ name: 'AirPods', href: '#!' },
// 	{ name: 'TV & Home', href: '#!' },
// 	{ name: 'Entertainment', href: '#!' },
// 	{ name: 'Accessories', href: '#!' },
// 	{ name: 'Support', href: '#!' },
// ];

export function MobileNav({ isOpen, onClose }) {
	return (
		<>
			{/* Затемнение фона — fade overlay */}
			<div
				className={`${styles.fade} ${isOpen ? styles.fadeOpen : ''}`}
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Само меню */}
			<nav
				className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
				aria-label="Mobile navigation"
				aria-hidden={!isOpen}
			>
				<MobileBtn isOpen={isOpen} onClick={onClose} />
				<ul className={styles.list}>
					{navItems.map((item) => (
						<li key={item.name} className={styles.item}>
							<a
								href={item.href}
								className={styles.link}
								onClick={onClose}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

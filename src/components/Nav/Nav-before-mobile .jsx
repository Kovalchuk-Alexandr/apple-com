import { Cart, Logo, MobileBtn, Search } from '../icons';
import styles from './style.module.css';

const Nav = () => {
	const navItems = [
		// { name: <Logo className={styles.nav__icon} />, href: '#!' },
		{ name: 'Store', href: '#!', type: 'text' },
		{ name: 'Mac', href: '#!', type: 'text' },
		{ name: 'iPad', href: '#!', type: 'text' },
		{ name: 'iPhone', href: '#!', type: 'text' },
		{ name: 'Watch', href: '#!', type: 'text' },
		{ name: 'Vision', href: '#!', type: 'text' },
		{ name: 'AirPods', href: '#!', type: 'text' },
		{ name: 'TV & Home', href: '#!', type: 'text' },
		{ name: 'Entertaiment', href: '#!', type: 'text' },
		{ name: 'Accessories', href: '#!', type: 'text' },
		{ name: 'Support', href: '#!', type: 'text' },
		// { name: <Search className={styles.nav__icon} />, href: '#!' },
		// { name: <Cart className={styles.nav__icon} />, href: '#!' },
	];
	return (
		<nav className={styles.nav}>
			<div className="container">
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<a href="#!" className={styles.nav__link}>
							<Logo className={styles.nav__icon} />,
						</a>
					</li>
					{navItems.map((item, index) => (
						<li
							key={index}
							className={
								styles.nav__item +
								(item.type === 'text'
									? ` ${styles['nav__item--text']}`
									: '')
							}
						>
							<a href={item.href} className={styles.nav__link}>
								{item.name}
							</a>
						</li>
						// В JSX добавить MobileBtn отдельным элементом
					))}
					<li className={styles.nav__item}>
						<Search className={styles.nav__icon} />
					</li>
					<li className={styles.nav__item}>
						<Cart className={styles.nav__icon} />
					</li>
					<li
						className={`${styles.nav__item} ${styles['nav__item--mobile']}`}
					>
						<MobileBtn />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;

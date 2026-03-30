import { Cart, Logo, Search } from '../icons';
import styles from './style.module.css';

const Nav = () => {

	const navItems = [
		{ name: <Logo className={styles.nav__icon} />, href: '#!' },
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
		{ name: <Search className={styles.nav__icon} />, href: '#!' },
		{ name: <Cart className={styles.nav__icon} />, href: '#!' },
	];
	return (
		<nav className={styles.nav}>
			<div className="container">
				<ul className={styles.nav__list}>
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
					))}
					{/* <li className="nav__item">
						<a href="#!" className={styles.nav__link}>
							Mac
						</a>
					</li>
					<li className="nav__item">
						<a href="#!" className={styles.nav__link}>
							Support
						</a>
					</li>
					<li className="nav__item">
						<a href="#!" className={styles.nav__link}>
							<Search className={styles.nav__icon} />
						</a>
					</li>
					<li className="nav__item">
						<a href="#!" className={styles.nav__link}>
							<Cart className={styles.nav__icon} />
						</a>
					</li>*/}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;

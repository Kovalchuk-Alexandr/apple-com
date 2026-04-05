import Nav from '@components/Nav';
import Hero from '@/components/Hero';
import { heroes } from '@data/heroes';
import { promos } from '@data/promos';

export default function Home() {
	// const data = {
	// 	type: 'default',
	// 	title: 'iPhone 17 Pro',
	// 	subtitle: 'All out Pro.',
	// 	imageDesktop: '/img/hero/iphone-17-pro.jpg',
	// 	imageTablet: '/img/hero/iphone-17-pro-tablet.jpg',
	// 	imageMobile: '/img/hero/iphone-17-pro-mobile.jpg',
	// 	altText:
	// 		'iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash',
	// 	buttons: [
	// 		{ title: 'Learn more', type: 'primary', link: '#!' },
	// 		{ title: 'Buy', type: 'outline', link: '#!' },
	// 	],
	// };

	return (
		<>
			<Nav />
			{/* <Hero data={data} /> */}
			<section className="section-heroes">
				{heroes.map((hero, index) => (
					<Hero data={hero} key={index} size="" />
				))}
			</section>
			<section className="section-promo-grid">
				{promos.map((promo, index) => (
					<Hero data={promo} key={index} size="small" />
				))}
			</section>
		</>
	);
}

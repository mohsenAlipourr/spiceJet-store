import banner1 from 'public/images/baner1.png';
import banner2 from 'public/images/baner2.png';
import banner3 from 'public/images/baner3.png';
import banner4 from 'public/images/baner4.png';
import banner5 from 'public/images/baner5.png';
import { productsData } from './products';

export const homeData = {
	slider: {
		link: banner1,
		alt: 'main slider',
	},
	bannerMiddle: {
		link: banner2,
		alt: 'banner middle',
	},
	bannerBottom: {
		medium: {
			link: banner5,
			alt: 'banner bottom medium',
		},
		small: [
			{
				link: banner3,
				alt: 'banner bottom small 1',
			},
			{
				link: banner4,
				alt: 'banner bottom small 2',
			},
		],
	},
	sliderProducts: {
		bestOffer: {
			title: 'Best Offer Products',
			list: [productsData[18], productsData[13], productsData[20], productsData[6]],
		},

		bestSelling: {
			title: 'Best Selling Products',
			list: [productsData[17], productsData[15], productsData[27], productsData[10]],
		},
	},
};

import banner1 from 'public/images/baner1.png';
import banner2 from 'public/images/baner2.png';
import banner3 from 'public/images/baner3.png';
import banner4 from 'public/images/baner4.png';
import banner5 from 'public/images/baner5.png';
import bestOfferImage from 'public/images/product.png';

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
			list: [
				{
					id: 'sp-12',
					image: bestOfferImage,
					title: 'example product',
					price: 569.0,
				},
				{
					id: 'sp-13',
					image: bestOfferImage,
					title: 'example product 2',
					price: 6050,
				},
				{
					id: 'sp-14',
					image: bestOfferImage,
					title: 'example product 3',
					price: 6070,
				},
			],
		},

		bestSelling: {
			title: 'Best Selling Products',
			list: [
				{
					id: 'sp-12',
					image: bestOfferImage,
					title: 'example product',
					price: 569.0,
				},
				{
					id: 'sp-13',
					image: bestOfferImage,
					title: 'example product 2',
					price: 6050,
				},
				{
					id: 'sp-14',
					image: bestOfferImage,
					title: 'example product 3',
					price: 6070,
				},
			],
		},
	},
};

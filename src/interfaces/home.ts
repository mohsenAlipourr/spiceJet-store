import { StaticImageData } from 'next/image';

export interface HomeDataApiResponse {
	slider: {
		link: StaticImageData;
		alt: string;
	};
	bannerMiddle: {
		link: StaticImageData;
		alt: string;
	};
	bannerBottom: {
		medium: {
			link: StaticImageData;
			alt: string;
		};
		small: {
			link: StaticImageData;
			alt: string;
		}[];
	};
	sliderProducts: {
		bestOffer: {
			title: string;
			list: {
				id: string;
				images: StaticImageData;
				title: string;
				price: number;
			}[];
		};

		bestSelling: {
			title: string;
			list: {
				id: string;
				images: StaticImageData;
				title: string;
				price: number;
			}[];
		};
	};
}

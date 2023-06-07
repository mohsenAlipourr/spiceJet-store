export interface HomeApiResponse {
	data: HomeDataApiResponse;
	status: number;
}

export interface HomeDataApiResponse {
	slider: {
		link: string;
		alt: string;
	};
	bannerMiddle: {
		link: string;
		alt: string;
	};
	bannerBottom: {
		medium: {
			link: string;
			alt: string;
		};
		small: [
			{
				link: string;
				alt: string;
			},
			{
				link: string;
				alt: string;
			},
		];
	};
	sliderProducts: {
		bestOffer: {
			title: string;
			list: {
				id: string;
				image: string;
				title: string;
				price: number;
			}[];
		};

		bestSelling: {
			title: string;
			list: {
				id: string;
				image: string;
				title: string;
				price: number;
			}[];
		};
	};
}

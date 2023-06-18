import { StaticImageData } from 'next/image';

export interface ProductsDataApiResponse {
	list: ProductDataApiResponse[];
}

export interface ProductDataApiResponse {
	id: string;
	title: string;
	price: number;
	score: number;
	images: StaticImageData[];
	summery: string;
	description: {
		title: string;
		content: string;
	}[];
}

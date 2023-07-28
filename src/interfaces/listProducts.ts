import { StaticImageData } from 'next/image';
export interface ListProducts {
	category: string;
	description: {
		title: string;
		content: string;
	}[];
	id: string;
	images: StaticImageData[];
	price: number;
	score: number;
	summery: string;
	title: string;
}

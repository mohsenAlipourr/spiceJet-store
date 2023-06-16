import { StaticImageData } from 'next/image';

export interface ProductsDataApiResponse {
	list: ProductDataApiResponse[];
}

export interface ProductDataApiResponse {
	id: 'sp-12';
	title: 'example product sp-12';
	price: 550;
	score: 3;
	images: [StaticImageData];
	summery: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras...';
	description: [
		{
			title: 'Description';
			content: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus.';
		},
		{
			title: 'Lorem ipsum dolor sit amet';
			content: 'Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy.';
		},
		{
			title: 'Sample Paragraph Text';
			content: 'Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc commodo eu convallis vitae interdum non nisl. convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue.';
		},
	];
}

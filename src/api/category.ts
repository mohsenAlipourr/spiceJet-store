import { ProductsDataApiResponse } from '@src/interfaces/product';
import { productsData } from '@src/services/database/products';

type Response = {
	data: ProductsDataApiResponse['list'];
	status: 200 | 404;
};

export const getCategoryData = (name: string) => {
	return new Promise<Response>((resolve) => {
		const products: Response['data'] = productsData.filter((product) => product.category === name);

		const result: Response = {
			data: products,
			status: 200,
		};

		resolve(result);
	});
};

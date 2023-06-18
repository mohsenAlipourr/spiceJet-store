import { ProductDataApiResponse } from '@src/interfaces/product';
import { productsData } from '@src/services/database/products';

type Response = {
	data: ProductDataApiResponse | {};
	status: 200 | 404;
};

export const getProductData = (id: string) => {
	return new Promise<Response>((resolve) => {
		const product: Response['data'] = productsData.find((product) => product.id === id) || {};

		if (Object.keys(product).length !== 0) {
			const result: Response = {
				data: product,
				status: 200,
			};

			resolve(result);
		} else {
			const result: Response = {
				data: {},
				status: 404,
			};

			resolve(result);
		}
	});
};

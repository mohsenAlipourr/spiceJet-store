import { ListProducts } from '@src/interfaces/listProducts';
import { getProductData } from './product';

type CartChangeResponse = {
	status: 201 | 422;
};

export const postNewOrder = (country: string | number, state: string | number, postalCode: string | number) => {
	return new Promise<CartChangeResponse>((resolve) => {
		try {
			if (country && state && postalCode) {
				const productsLocalStorage = localStorage.getItem('cartList') || '[]';
				const products = JSON.parse(productsLocalStorage) || [];
				const myOrdersLocalStorage = localStorage.getItem('myOrders') || '[]';
				const myOrders = JSON.parse(myOrdersLocalStorage) || [];

				myOrders.push({ products, country, state, postalCode });

				localStorage.setItem('myOrders', JSON.stringify(myOrders));
				localStorage.setItem('cartList', JSON.stringify([]));

				const result: CartChangeResponse = {
					status: 201,
				};

				resolve(result);
			}
		} catch (error) {
			const result: CartChangeResponse = {
				status: 422,
			};

			resolve(result);
		}
	});
};

type CartListResponse = {
	data: [];
	status: 200 | 403;
};
type CartListType = {
	country: string;
	postalCode: string;
	products: [];
	state: string;
};

export const getMyOrders = () => {
	return new Promise<CartListResponse>((resolve) => {
		try {
			const cartListLocalStorage = localStorage.getItem('myOrders') || '[]';
			const cartList = JSON.parse(cartListLocalStorage) || [];

			cartList.forEach(async (item: CartListType, index: number) => {
				item.products.forEach(async (product: ListProducts, indexProduct: number) => {
					const response = await getProductData(product.id);

					cartList[index].products[indexProduct] = { ...response.data, ...cartList[index].products[indexProduct] };
				});
			});

			const result: CartListResponse = {
				data: cartList,
				status: 200,
			};

			resolve(result);
		} catch (error) {
			const result: CartListResponse = {
				data: [],
				status: 403,
			};

			resolve(result);
		}
	});
};

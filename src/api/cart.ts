import { getProductData } from './product';

type CartChangeResponse = {
	cartTotal?: number;
	status: 200 | 422;
};

type CartListType = {
	id: string;
};

export const postCartChange = (id: string, total: number) => {
	return new Promise<CartChangeResponse>((resolve) => {
		try {
			if (id && typeof total === 'number') {
				const cartListLocalStorage = localStorage.getItem('cartList') || '[]';
				const cartList = JSON.parse(cartListLocalStorage) || [];
				const index = cartList.findIndex((item: CartListType) => item.id === id);

				if (index !== -1) {
					if (total === 0) {
						cartList.splice(index, 1);
					} else {
						const totalFinal = cartList[index].total + total;

						if (totalFinal <= 0) {
							cartList.splice(index, 1);
						} else {
							cartList[index].total = totalFinal;
						}
					}
				} else {
					if (total >= 1) {
						cartList.push({ id, total });
					}
				}

				localStorage.setItem('cartList', JSON.stringify(cartList));

				const result: CartChangeResponse = {
					cartTotal: cartList.length,
					status: 200,
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

export const getCartList = () => {
	return new Promise<CartListResponse>((resolve) => {
		try {
			const cartListLocalStorage = localStorage.getItem('cartList') || '[]';
			const cartList = JSON.parse(cartListLocalStorage) || [];

			cartList.forEach(async (item: CartListType, index: number) => {
				const response = await getProductData(item.id);
				cartList[index] = { ...response.data, ...cartList[index] };
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

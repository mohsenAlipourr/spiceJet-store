import Image from 'next/image';
import accepted from 'public/icons/accepted.png';

import { Wrapper } from './styled';
import { useEffect, useState } from 'react';
import { getMyOrders } from '@src/api/order';
import OrderedProduct from './orderedProduct';

const OrderedProducts = () => {
	const [orders, setOrders] = useState([]);

	const getCart = async () => {
		const response = await getMyOrders();
		setOrders(response.data);
	};

	useEffect(() => {
		getCart();
	}, []);

	console.log(orders);

	return (
		<>
			{orders.length ? (
				orders.map((item: any, index: any) => (
					<Wrapper key={index}>
						<OrderedProduct list={item.products}></OrderedProduct>

						<Image src={accepted} alt='accepted' />
					</Wrapper>
				))
			) : (
				<h3>There is no order</h3>
			)}
		</>
	);
};

export default OrderedProducts;

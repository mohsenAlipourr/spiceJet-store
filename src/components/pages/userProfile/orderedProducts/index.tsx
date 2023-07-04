import Image from 'next/image';
import { useEffect, useState } from 'react';
import accepted from 'public/icons/accepted.png';
import { getMyOrders } from '@src/api/order';
import OrderedProduct from './orderedProduct';
import { Wrapper, OrderedProductWrapper, CartContent } from './styled';

const OrderedProducts = () => {
	const [orders, setOrders] = useState([]);

	const getCart = async () => {
		const response = await getMyOrders();
		setOrders(response.data);
	};

	useEffect(() => {
		getCart();
	}, []);

	if (!orders.length) return <h3>There is no order</h3>;

	return (
		<CartContent>
			{orders.map((item: any, index: any) => (
				<Wrapper key={index}>
					<OrderedProductWrapper>
						<span>
							Order #{index + 1}
							<br />
							country: {item.country}, state: {item.state}, postal code: {item.postalCode}
						</span>

						<OrderedProduct products={item.products} />
					</OrderedProductWrapper>

					<Image src={accepted} alt='accepted' />
				</Wrapper>
			))}
		</CartContent>
	);
};

export default OrderedProducts;

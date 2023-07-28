import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCartList } from '@src/api/cart';
import UserCart from '@src/components/pages/userCart';
import { routes } from '@src/constants/routes';

const Cart = () => {
	const [cartList, setCartList] = useState([]);
	const router = useRouter();

	const getCart = async () => {
		const response = await getCartList();
		setCartList(response.data);
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (!email || !password) {
			router.push(routes.login);
		} else {
			getCart();
		}
	}, []);

	return (
		<>
			<Head>
				<title>spiceJet - Cart</title>
			</Head>

			<UserCart cartList={cartList} setCartList={setCartList} />
		</>
	);
};

export default Cart;

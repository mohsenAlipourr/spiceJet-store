import { getCartList } from '@src/api/cart';
import UserCart from '@src/components/pages/userCart';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { routes } from '@src/constants/routes';

const Cart = (/* props: any */) => {
	const router = useRouter();

	const getCart = async () => {
		const response = await getCartList();
		console.log(response);
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

	return <UserCart />;
};

export default Cart;

import Image from 'next/image';
import Link from 'next/link';
/* import dynamic from 'next/dynamic';
 */ import { useSelector } from 'react-redux';
import account from 'public/icons/account.png';
import cart from 'public/icons/cart.png';
import { Counter, DivIcon, DivIconCart } from './styled';
import Button from '@src/components/base/button';
import { routes } from '@src/constants/routes';

const BoxLogin = () => {
	const email = useSelector((state: any) => state.globalSlice.data.email);
	const password = useSelector((state: any) => state.globalSlice.data.password);
	const counter = useSelector((state: any) => state.globalSlice.data.cartTotal);
	const isLogin = email && password;

	return (
		<>
			{isLogin ? (
				<DivIcon>
					<Link href={routes.profile}>
						<Image src={account} alt='account' />
					</Link>

					<DivIconCart>
						<Link href={routes.cart}>
							<Image src={cart} alt='cart' />
						</Link>
					</DivIconCart>

					{counter ? <Counter>{counter}</Counter> : <></>}
				</DivIcon>
			) : (
				<Link href={routes.login}>
					<Button width={165} fontSize={15}>
						Login | Register
					</Button>
				</Link>
			)}
		</>
	);
};

export default BoxLogin;
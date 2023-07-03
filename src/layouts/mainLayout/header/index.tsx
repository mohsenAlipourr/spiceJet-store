import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import logo from 'public/images/logo.png';
import { HeaderContent, HeaderWrapper, Category, ListCategories } from './styled';
import { routes } from '@src/constants/routes';
import { useEffect } from 'react';
import { updateGlobalSlice } from '@src/store/globalSlice';

const BoxLogin = dynamic(() => import('./boxLogin'), {
	ssr: false,
});

const Header = () => {
	const listCategory = [
		{ title: 'masalas', link: 'masalas' },
		{ title: 'chat masalas', link: 'masalas' },
		{ title: 'pepper Powder', link: 'masalas' },
		{ title: 'cooking Essentials', link: 'masalas' },
		{ title: 'refund Oil', link: 'masalas' },
	];
	const dispatch = useDispatch();

	useEffect(() => {
		const cartList = JSON.parse(localStorage.getItem('cartList') || '');
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		dispatch(updateGlobalSlice({ cartTotal: cartList?.length, email: email, password: password }));
	}, []);
	return (
		<HeaderContent>
			<HeaderWrapper>
				<div>
					<Link href='/'>
						<Image src={logo} alt='logo' />
					</Link>
				</div>

				<ListCategories>
					{listCategory.map((item, index) => (
						<Link href={routes.category(item.link)} key={index}>
							<Category key={index}>{item.title}</Category>
						</Link>
					))}
				</ListCategories>

				<BoxLogin />
			</HeaderWrapper>
		</HeaderContent>
	);
};

export default Header;

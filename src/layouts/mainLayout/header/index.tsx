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

const listCategory = [
	{ title: 'masalas', link: 'masalas' },
	{ title: 'chat masalas', link: 'chat-masalas' },
	{ title: 'pepper Powder', link: 'pepper-Powder' },
	{ title: 'cooking Essentials', link: 'cooking-essentials' },
	{ title: 'refund Oil', link: 'refund-oil' },
];

const Header = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList') || '') : '';

			dispatch(updateGlobalSlice({ cartTotal: cartList?.length, email: email, password: password }));
		}
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

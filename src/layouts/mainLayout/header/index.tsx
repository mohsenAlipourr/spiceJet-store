import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import logo from 'public/images/logo.png';
import { HeaderContent, HeaderWrapper, Category, ListCategories } from './styled';
import { routes } from '@src/constants/routes';

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

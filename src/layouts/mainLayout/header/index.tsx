import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import account from 'public/icons/account.png';
import cart from 'public/icons/cart.png';
import { DivIcon, DivIconCart, HeaderContent, HeaderWrapper, Category, ListCategories } from './styled';

const Header = () => {
	const listCategory = [
		{ title: 'masalas' },
		{ title: 'chat masalas' },
		{ title: 'pepper Powder' },
		{ title: 'cooking Essentials' },
		{ title: 'refund Oil' },
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
						<Category key={index}>{item.title}</Category>
					))}
				</ListCategories>

				<DivIcon>
					<Link href='/profile'>
						<Image src={account} alt='account' />
					</Link>

					<DivIconCart>
						<Link href='/cart'>
							<Image src={cart} alt='cart' />
						</Link>
					</DivIconCart>
				</DivIcon>
			</HeaderWrapper>
		</HeaderContent>
	);
};

export default Header;

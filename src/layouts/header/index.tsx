import Image from 'next/image';
import { HeaderContent, HeaderLogo } from './style';

const Header = () => {
	return (
		<HeaderContent>
			<HeaderLogo src='logo.png' alt='' />
			<div></div>
			<div>
				<Image src='account.png' alt='' />
				<Image src='cart.png' alt='' />
			</div>
		</HeaderContent>
	);
};
export default Header;

import { HeaderContent, HeaderLogo } from './style';

const Header = () => {
	return (
		<HeaderContent>
			<HeaderLogo src='logo.png' alt='' />
			<div></div>
			<div>
				<img src='account.png' alt='' />
				<img src='cart.png' alt='' />
			</div>
		</HeaderContent>
	);
};
export default Header;

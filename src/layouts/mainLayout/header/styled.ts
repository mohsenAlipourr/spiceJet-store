import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black } = theme.colors;

export const HeaderContent = styled.header(() => ({
	width: '100%',
	height: '80px',
	background: ' white',
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
	position: 'fixed',
}));

export const HeaderWrapper = styled.div(() => ({
	...theme.wrapper,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
}));

export const ListCategories = styled.div(() => ({
	'@media (max-width: 600px)': {
		display: 'none',
	},
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	fontSize: 20,
	'& a': {
		textDecoration: 'none',
		color: black[100],
	},
}));

export const Category = styled.span(() => ({
	cursor: 'pointer',
	marginRight: 40,
}));

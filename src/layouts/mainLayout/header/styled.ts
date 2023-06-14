import styled from '@emotion/styled';
import theme from '@styles/theme';

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
	fontFamily: 'sans-serif',
	fontSize: 23,
	color: '#2c222a',
}));

export const Category = styled.span(() => ({
	cursor: 'pointer',
	marginRight: 40,
}));

export const DivIcon = styled.div(() => ({
	display: 'flex',
}));

export const DivIconCart = styled.div(() => ({
	marginLeft: ' 15px',
}));

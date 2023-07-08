import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, red, blue } = theme.colors;

export const Products = styled.div(() => ({
	'@media (max-width: 600px)': {
		overflow: 'scroll',
		justifyContent: 'flex-start',
	},
	display: 'flex',
	justifyContent: 'center',
}));

export const Product = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	'& a': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textDecoration: 'none',
	},
}));

export const Title = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '75px',
	color: blue[500],
	fontSize: 18,
	fontWeight: 'bold',
}));

export const Content = styled.div(() => ({
	margin: '60px 0px 80px 0px',
}));

export const ProductTitle = styled.span(() => ({
	color: black[100],
	fontSize: 18,
}));

export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 15px 0px',
	color: red[400],
	fontSize: 18,
}));

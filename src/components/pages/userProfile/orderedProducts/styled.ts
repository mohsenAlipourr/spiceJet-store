import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue, red } = theme.colors;

export const CartContent = styled.div(() => ({
	minHeight: 600,
	width: '100%',
	maxWidth: 700,
	borderRadius: 7,
	border: '3px solid #e0e0e6',
	padding: 20,

	'@media (max-width: 992px)': {
		marginTop: 30,
	},

	'@media (max-width: 600px)': {
		marginTop: 0,
		border: 'none',
		padding: '20px 0',
	},
}));

export const Wrapper = styled.div(() => ({
	display: 'flex',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	justifyContent: 'space-between',
	padding: 9,
	marginTop: 20,
}));

export const OrderedProductWrapper = styled.div(() => ({
	flexDirection: 'column',
}));

export const OrderedProduct = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
}));

export const OrderedProductDetails = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const OrderedProductName = styled.span(() => ({
	fontSize: 20,
	color: black[100],
}));

export const PriceProduct = styled.div(() => ({
	marginTop: 20,
}));

export const Total = styled.span(() => ({
	fontSize: 18,
	marginRight: 8,
	color: blue[500],
}));

export const Price = styled.span(() => ({
	fontSize: 18,
	color: red[400],
}));

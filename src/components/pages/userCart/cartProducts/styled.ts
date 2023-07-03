import styled from '@emotion/styled';
import theme from '@styles/theme';

const { red, black, blue } = theme.colors;

export const Wrapper = styled.div(() => ({
	display: 'flex',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	justifyContent: 'space-between',
	padding: 9,
	marginTop: 20,
	width: 520,

	'& img': {
		cursor: 'pointer',
	},

	'@media (max-width: 600px)': {
		width: '100%',
	},
}));

export const OrderedProduct = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
}));

export const ProductName = styled.span(() => ({
	fontSize: 20,
	color: black[100],
}));

export const OrderedProductDetails = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const PriceProduct = styled.div(() => ({
	display: 'flex',
	marginTop: 10,
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

export const ProductCounter = styled.div(() => ({
	width: 100,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	marginTop: 30,
}));

export const CounterNumber = styled.span(() => ({
	color: red[400],
}));

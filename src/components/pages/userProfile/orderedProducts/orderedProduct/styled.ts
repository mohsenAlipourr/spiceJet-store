import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue, red } = theme.colors;

export const Wrapper = styled.div(() => ({
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

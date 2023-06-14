import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	justifyContent: 'space-between',
	padding: 9,
	marginTop: 20,
	width: 520,
}));

export const OrderedProduct = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
}));

export const OrderedProductDetails = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const Total = styled.div(() => ({
	marginTop: 20,
}));

export const ProductCounter = styled.div(() => ({
	width: 89,
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	marginTop: 30,
}));

export const CounterNumber = styled.span(() => ({
	color: '#cf191a',
}));

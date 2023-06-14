import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	marginTop: 80,
}));

export const ProductsShoppingCart = styled.div(() => ({
	marginRight: 95,
}));

export const Form = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	width: 350,
	height: 400,
	padding: 20,
}));

export const BuyButton = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: 35,
	alignItems: 'center',
}));

export const FormInput = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginTop: 20,
}));

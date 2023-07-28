import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue } = theme.colors;

export const Wrapper = styled.div(() => ({
	flexWrap: 'wrap',
	display: 'flex',
	justifyContent: 'center',
	marginTop: 80,
}));

export const ProductsShoppingCart = styled.div(() => ({
	'@media (max-width: 600px)': {
		marginRight: 0,
		width: '100%',
	},
	marginRight: 95,
}));

export const CartTitle = styled.h2(() => ({
	color: blue[500],
}));

export const Form = styled.div(() => ({
	'@media (max-width: 600px)': {
		width: '100%',
		padding: 10,
	},
	display: 'flex',
	flexDirection: 'column',
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	width: 350,
	padding: 20,
}));

export const DescriptionForm = styled.p(() => ({
	fontSize: 18,
	color: black[100],
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

export const FormInputTitle = styled.span(() => ({
	fontSize: 18,
	marginBottom: 10,
	color: blue[500],
}));

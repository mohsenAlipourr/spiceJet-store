import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue, red } = theme.colors;

export const Wrapper = styled.div(() => ({
	display: 'flex',
	marginTop: 90,
	justifyContent: 'center',

	'@media (max-width: 768px)': {
		flexWrap: 'wrap',
	},

	'@media (max-width: 600px)': {
		marginTop: 50,
	},
}));

export const Product = styled.div(() => ({
	borderLeft: '5px solid #e0e0e6',
	padding: '0px 0px 20px 20px',

	'@media (max-width: 600px)': {
		marginTop: 40,
	},
}));

export const ProductName = styled.h2(() => ({
	color: black[100],
}));

export const AlbumImage = styled.div(() => ({
	position: 'relative',
	marginRight: 20,
	paddingRight: 80,

	'@media (max-width: 768px)': {
		marginRight: 10,
		paddingRight: 0,
	},
}));

export const IconProduct = styled.div(() => ({
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	right: 0,
	filter: 'invert(0%) sepia(4%) saturate(2%) hue-rotate(270deg) brightness(60%) contrast(100%)',
}));

export const ImagesProduct = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

export const Share = styled.div(() => ({
	marginTop: 15,
}));

export const Description = styled.p(() => ({
	maxWidth: 530,
	color: black[100],
	marginTop: 25,
}));

export const ProductPrice = styled.div(() => ({
	marginTop: 100,
	fontSize: 18,
}));

export const Price = styled.span(() => ({
	color: blue[500],
	marginRight: 10,
}));

export const Amount = styled.span(() => ({
	color: red[400],
}));

export const ButtonBuy = styled.div(() => ({
	marginTop: 20,

	'& button': {
		maxWidth: 335,
		width: '100%',
	},
}));

import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue, red } = theme.colors;

export const Wrapper = styled.div(() => ({
	'@media (max-width: 600px)': {
		flexWrap: 'wrap',
	},
	display: 'flex',
	marginTop: 90,
	justifyContent: 'center',
}));

export const Product = styled.div(() => ({
	borderLeft: '5px solid #e0e0e6',
	padding: '0px 0px 20px 20px',
}));

export const ProductName = styled.h2(() => ({
	color: black[100],
}));

export const AlbumImage = styled.div(() => ({
	'@media (max-width: 600px)': {
		marginRight: 0,
	},
	marginRight: 110,
	position: 'relative',
}));

export const IconProduct = styled.div(() => ({
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	left: 379,
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
}));

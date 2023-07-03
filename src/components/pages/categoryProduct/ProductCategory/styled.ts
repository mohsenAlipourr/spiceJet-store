import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, red } = theme.colors;

export const Product = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: '20px 10px',

	'& a': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textDecoration: 'none',
	},
}));

export const ProductName = styled.div(() => ({
	fontSize: 20,
	color: black[100],
}));

export const ProductFavorites = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: 10,
}));

export const Score = styled.div(() => ({
	marginRight: 10,
}));

export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 10px 0px',
	fontSize: 18,
	color: red[400],
}));

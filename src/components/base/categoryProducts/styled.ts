import styled from '@emotion/styled';

export const Product = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginRight: 80,
	marginTop: 40,
}));

export const ProductFavorites = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
}));

export const Score = styled.div(() => ({
	marginRight: 10,
}));

export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 15px 0px',
	color: '#cf191a',
}));

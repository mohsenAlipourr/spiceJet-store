import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	marginTop: 90,
	justifyContent: 'center',
}));

export const Product = styled.div(() => ({
	borderLeft: '5px solid #e0e0e6',
	padding: '0px 0px 20px 20px',
}));

export const AlbumImage = styled.div(() => ({
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
}));

export const Price = styled.div(() => ({
	marginTop: 50,
}));

export const Amount = styled.span(() => ({
	color: '#cf191a',
}));

export const ButtonBuy = styled.div(() => ({
	marginTop: 20,
}));

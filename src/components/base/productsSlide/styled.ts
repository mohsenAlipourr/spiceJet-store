import styled from '@emotion/styled';

export const Products = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	'@media (max-width: 600px)': {
		overflow: 'hidden',
	},
}));

export const Product = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));

export const Title = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '75px',
	fontFamily: 'sans-serif',
	fontSize: 23,
	color: '#2b2b71',
}));

export const Contener = styled.div(() => ({
	margin: '60px 0px 80px 0px',
}));

export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 15px 0px',
	color: '#cf191a',
}));

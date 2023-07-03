import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-around',
	marginTop: 60,
}));

export const ProductContent = styled.div(() => ({
	width: 1000,
}));

export const FilterProducts = styled.div(() => ({
	width: '100%',
	maxWidth: 1000,
	borderBottom: '3px solid #e0e0e6',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}));

export const Products = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
}));

export const Search = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const Sidebar = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: 500,
}));

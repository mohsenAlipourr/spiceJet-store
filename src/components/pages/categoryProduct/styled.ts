import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-around',
	marginTop: 60,
}));

export const HeaderCategory = styled.div(() => ({
	width: 1000,
	borderBottom: '3px solid #e0e0e6',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}));

export const Search = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const Sidebar = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));
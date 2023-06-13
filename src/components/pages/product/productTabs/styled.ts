import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	marginTop: 180,
}));

export const Tabs = styled.div(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
}));

export const Tab = styled.span(() => ({
	marginRight: 100,
	cursor: 'pointer',
	color: '#cf191a',
}));

export const DescriptionTabs = styled.div(() => ({
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	height: 500,
	marginTop: 20,
	padding: 15,
}));

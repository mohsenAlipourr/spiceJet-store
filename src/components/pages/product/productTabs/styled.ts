import styled from '@emotion/styled';
import theme from '@styles/theme';

const { red } = theme.colors;

export const Wrapper = styled.div(() => ({
	marginTop: 180,
}));

export const Tabs = styled.div(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
}));

export const Tab = styled.span(() => ({
	fontWeight: 'bold',
	fontSize: 18,
	cursor: 'pointer',
	color: red[400],
}));

export const DescriptionTabs = styled.div(() => ({
	'@media (max-width: 600px)': {
		width: '100%',
	},
	border: '3px solid #e0e0e6',
	borderRadius: 7,
	height: 500,
	marginTop: 20,
	padding: 15,
	overflow: 'scroll',
}));

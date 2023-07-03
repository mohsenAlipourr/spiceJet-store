import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue } = theme.colors;

export const FooterContent = styled.footer(() => ({
	background: ' #e0e0e6',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	marginTop: '100px',
}));

export const FooterWrapper = styled.div(() => ({
	...theme.wrapper,
	position: 'relative',
	padding: '14px 20px',
}));

export const DivLogo = styled.div(() => ({
	position: 'absolute',
	top: '-24px',
}));

export const DivContent = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',

	'@media (max-width: 600px)': {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
}));

export const DivContentWrapper = styled.div(() => ({
	margin: '0 10px',
}));

export const PContent = styled.p(() => ({
	maxWidth: '340px',
	color: black[100],
}));

export const DivContentUs = styled.div(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	marginTop: 10,
}));

export const FooterTitle = styled.h1(() => ({
	color: blue[500],
}));

export const icon = styled.image(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
}));

export const SpanContentUs = styled.span(() => ({
	marginLeft: 10,
	color: black[100],
}));

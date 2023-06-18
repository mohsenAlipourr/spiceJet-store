import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black, blue } = theme.colors;

export const FooterContent = styled.footer(() => ({
	height: '230px',
	background: ' #e0e0e6',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	marginTop: '100px',
}));

export const FooterWrapper = styled.div(() => ({
	...theme.wrapper,
	position: 'relative',
}));

export const DivLogo = styled.div(() => ({
	position: 'absolute',
	bottom: '172px',
}));

export const DivContent = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
}));

export const PContent = styled.p(() => ({
	width: '340px',
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

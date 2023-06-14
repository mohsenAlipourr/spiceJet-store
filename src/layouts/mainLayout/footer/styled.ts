import styled from '@emotion/styled';
import theme from '@styles/theme';

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
	fontFamily: 'sans-serif',
	fontSize: 18,
	color: '#2c222a',
}));

export const DivContentUs = styled.div(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	marginTop: 10,
}));

export const FooterTitle = styled.h1(() => ({
	fontFamily: 'sans-serif',
	fontSize: 28,
	color: '#2b2b71',
}));

export const icon = styled.image(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
}));

export const SpanContentUs = styled.span(() => ({
	marginLeft: 10,
	fontFamily: 'sans-serif',
	fontSize: 18,
	color: '#2c222a',
}));

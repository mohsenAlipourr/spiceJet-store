import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Main = styled.main(() => ({
	...theme.wrapper,
	paddingTop: 80,
	minHeight: '100vh',
}));

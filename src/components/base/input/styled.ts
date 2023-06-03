import styled from '@emotion/styled';

export const Container = styled.input(({ styles }: any) => ({
	width: styles.width,
	height: styles.height,
	borderRadius: styles.radius,
	border: styles.borderColor,
	outline: 'none',
}));

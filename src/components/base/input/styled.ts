import styled from '@emotion/styled';

export const InputContainer = styled.input(({ styles }: any) => ({
	width: styles.width,
	height: styles.height,
	borderRadius: styles.radius,
	border: styles.borderColor,
	outline: 'none',
}));

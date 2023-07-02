import styled from '@emotion/styled';

export const ButtonContainer = styled.button(({ styles }: any) => ({
	width: styles.width,
	height: styles.height,
	borderRadius: styles.radius,
	border: styles.borderColor,
	color: styles.color,
	background: styles.background,
	disable: styles.disable,
	fontSize: styles.fontSize,
	cursor: 'pointer',
	fontFamily: 'inherit',
}));

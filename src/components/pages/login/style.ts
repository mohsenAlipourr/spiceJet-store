import styled from '@emotion/styled';

export const LoginWrapper = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '100vh',
}));

export const Form = styled.form(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
}));

export const Register = styled.div(() => ({
	'@media (max-width: 600px)': {
		border: 'none',
		padding: '0',
	},
	border: '3px solid #e0e0e6',
	height: 440,
	borderRadius: 7,
	padding: 30,
}));

export const Logo = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

export const LoginDescription = styled.div(() => ({
	fontSize: 18,
	marginTop: 35,
	marginBottom: 35,
}));

export const Password = styled.div(() => ({
	marginTop: 25,
}));

export const FormButton = styled.div(() => ({
	marginTop: 25,
}));

import styled from '@emotion/styled';

export const Wrapper = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	marginTop: 80,
}));

export const CartProfile = styled.div(() => ({
	width: 400,
	height: 400,
	borderRadius: 7,
	border: '3px solid #e0e0e6',
	marginRight: 50,
	padding: 20,
}));

export const Account = styled.div(() => ({
	borderBottom: '3px solid #e0e0e6',
	display: 'flex',
	justifyContent: 'space-between',
	paddingBottom: 20,
	alignItems: 'center',
}));

export const AccountContent = styled.div(() => ({
	display: 'flex',
}));

export const UserInformation = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 15,
}));

export const Orders = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: 20,
	borderBottom: '3px solid #e0e0e6',
	paddingBottom: 20,
}));

export const OrderText = styled.div(() => ({
	marginLeft: 10,
}));

export const CartContent = styled.div(() => ({
	height: 600,
	width: 700,
	borderRadius: 7,
	border: '3px solid #e0e0e6',
	padding: 20,
}));

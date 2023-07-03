import styled from '@emotion/styled';

export const DivIcon = styled.div(() => ({
	display: 'flex',
	padding: '0 10px',
}));

export const DivIconCart = styled.div(() => ({
	marginLeft: ' 15px',

	'& a': {
		position: 'relative',
	},
}));

export const Counter = styled.div(() => ({
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ef4056',
	color: 'white',
	height: 17,
	width: 18,
	borderRadius: 6,
	top: 4,
	right: '-10px',
}));

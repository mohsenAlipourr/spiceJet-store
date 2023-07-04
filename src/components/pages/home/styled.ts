import styled from '@emotion/styled';
import theme from '@styles/theme';

export const DivBanners = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',

	'@media (max-width: 1100px)': {
		flexWrap: 'wrap',
	},
}));

export const DivBannersLeft = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	marginRight: '70px',

	'& img': {
		borderRadius: '10px',
	},

	'@media (max-width: 1100px)': {
		margin: '0 20px',

		'& img': {
			marginTop: 20,
		},
	},

	'@media (max-width: 600px)': {
		'& img': {
			width: '100%',
			height: 'auto',
		},
	},
}));

export const DivBannersRight = styled.div(() => ({
	cursor: 'pointer',

	'& img': {
		borderRadius: '10px',

		'@media (max-width: 1100px)': {
			marginTop: 20,
		},

		'@media (max-width: 600px)': {
			width: '100%',
			height: 'auto',
		},
	},
}));

export const HomeWrapper = styled.div(() => ({
	...theme.wrapper,
}));

export const BannerFullWidth = styled.div(() => ({
	'& img': {
		width: '100%',
		height: 'auto',
	},
}));

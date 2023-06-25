import styled from '@emotion/styled';
import theme from '@styles/theme';

export const DivBanners = styled.div(() => ({
	'@media (max-width: 600px)': {
		flexWrap: 'wrap',
	},
	display: 'flex',
	justifyContent: 'center',
}));

export const DivBannersLeft = styled.div(() => ({
	'@media (max-width: 600px)': {
		marginRight: 0,
	},
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	marginRight: '70px',
	'& img': {
		'@media (max-width: 600px)': {
			width: '100%',
			height: 'auto',
			marginTop: 10,
		},
		borderRadius: '10px',
	},
}));

export const DivBannersRight = styled.div(() => ({
	cursor: 'pointer',
	'& img': {
		'@media (max-width: 600px)': {
			width: '100%',
			height: 'auto',
		},
		borderRadius: '10px',
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

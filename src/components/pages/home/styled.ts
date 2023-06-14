import styled from '@emotion/styled';
import theme from '@styles/theme';

export const DivBanners = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

export const DivBannersLeft = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	marginRight: '70px',
	'& img': {
		borderRadius: '10px',
	},
}));

export const DivBannersRight = styled.div(() => ({
	cursor: 'pointer',

	'& img': {
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

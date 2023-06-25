import { isBrowser } from '@src/utils';

const initialState = {
	data: {
		cartTotal: null,
		email: isBrowser ? localStorage.getItem('email') : null,
		password: isBrowser ? localStorage.getItem('password') : null,
	},
};

export default initialState;

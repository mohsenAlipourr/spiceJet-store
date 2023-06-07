import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './globalSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

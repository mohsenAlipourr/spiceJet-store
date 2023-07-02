import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './globalSlice';

export const store = configureStore({
	reducer: {
		globalSlice: counterReducer,
	},
});

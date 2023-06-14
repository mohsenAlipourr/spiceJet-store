import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import reducers from './reducers';

export const globalSlice = createSlice({
	name: 'globalSlice',
	initialState,
	reducers,
});

export default globalSlice.reducer;

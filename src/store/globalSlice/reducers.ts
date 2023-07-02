const reducers = {
	updateGlobalSlice: (state: any, action: { payload: any }) => {
		state.data = { ...state.data, ...action.payload };
	},
};

export default reducers;

type stateType = {
	data: {};
};

const reducers = {
	updateGlobalSlice: (state: stateType, action: { payload: any }) => {
		state.data = { ...state.data, ...action.payload };
	},
};

export default reducers;

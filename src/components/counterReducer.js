const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "incrementBy1":
			return { ...state, count: state.count + 1 };

		case "decrementBy1":
			return { ...state, count: state.count - 1 };

		case "incrementByAmount":
			return { ...state, count: state.count + Number(action.amount) };

		case "decrementByAmount":
			return { ...state, count: state.count - Number(action.amount) };

		case "reset":
			return { ...state, count: 0 };

		default:
			return state;
	}
};

export { reducer, initialState };

import { useReducer } from "react";
import { initialState, reducer } from "./counterReducer";
import { useState } from "react";

const Counter2 = () => {
	const [inp, setInp] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>Counter: {state.count}</h1>
			<button onClick={() => dispatch({ type: "incrementBy1" })}>+1</button>
			<button onClick={() => dispatch({ type: "decrementBy1" })}>-1</button>
			<button onClick={() => dispatch({ type: "reset" })}>RESET</button>
			<input
				type="text"
				name="amount"
				value={inp}
				onChange={(e) => setInp(e.target.value)}
			/>
			<button
				onClick={() => dispatch({ type: "incrementByAmount", amount: inp })}
			>
				Add
			</button>
			<button
				onClick={() => dispatch({ type: "decrementByAmount", amount: inp })}
			>
				Remove
			</button>
		</div>
	);
};

export default Counter2;

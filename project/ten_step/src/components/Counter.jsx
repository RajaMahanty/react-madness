import { useState } from "react";
import "../style.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="container">
			<div>
				<h1>Count: {count}</h1>
			</div>

			<div className="btns-container">
				<button onClick={() => setCount(count + 1)} className="btn">
					+
				</button>
				<button onClick={() => setCount(count - 1)} className="btn">
					-
				</button>
			</div>
		</div>
	);
};

export default Counter;

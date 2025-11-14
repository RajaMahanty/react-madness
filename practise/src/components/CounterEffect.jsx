import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("In useEffect!");
		document.title = `Count: ${count}`;
	}, [count]);

	return (
		<div>
			<h1>CounterEffect</h1>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</div>
	);
};

export default CounterEffect;

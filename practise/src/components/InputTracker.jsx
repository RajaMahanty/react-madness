import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function InputTracker() {
	const [value, setValue] = useState("");
	const prevValueRef = useRef("");

	useEffect(() => {
		prevValueRef.current = value;
	}, [value]);

	return (
		<div>
			<p>Current: {value}</p>
			<p>Previous: {prevValueRef.current}</p>
			<input onChange={(e) => setValue(e.target.value)} />
		</div>
	);
}

export default InputTracker;

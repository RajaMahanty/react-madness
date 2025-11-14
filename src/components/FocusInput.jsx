import { useRef } from "react";

const FocusInput = () => {
	const inpRef = useRef(null);

	const handleClick = () => {
		inpRef.current.focus();
		inpRef.current.value = "You Clicked in the button!";
	};

	return (
		<div>
			<input type="text" ref={inpRef} />
			<button onClick={handleClick}>Focus On Input & Write</button>
		</div>
	);
};

export default FocusInput;

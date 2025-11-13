import { useEffect } from "react";

const BasicEffect = () => {
	useEffect(() => {
		console.log("Will run only once");
	}, []);

	return (
		<div>
			<h1>Basic Effect</h1>
		</div>
	);
};

export default BasicEffect;

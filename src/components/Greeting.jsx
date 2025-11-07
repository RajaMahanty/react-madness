const Greeting = () => {
	const myName = "KM";
	return (
		<div>
			<h1>{myName}</h1>
			<p>{new Date().toString()}</p>
		</div>
	);
};

export default Greeting;

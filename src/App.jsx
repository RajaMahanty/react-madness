import JSXRules from "./components/JSXRules";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
	const myName = "Raja";
	const multiply = (a, b) => a * b;
	const specialClass = "simple-class";

	return (
		<div>
			<WelcomeMessage />
			<JSXRules />
			<section>
				<h2>2 + 2{2 + 2}</h2>
				<h2>{myName}</h2>
				<h3>My Friends list: {["Alex", "John", "Waheed", "Jordan"]}</h3>
				<h3>{multiply(3, 4)}</h3>
				<p className={specialClass}>This is special class</p>
			</section>
		</div>
	);
};

export default App;

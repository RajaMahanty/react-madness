import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

const App = () => {
	return (
		<main>
			<FetchDataEffect />
			<CounterEffect />
			<BasicEffect />
		</main>
	);
};

export default App;

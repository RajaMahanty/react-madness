import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";

const App = () => {
	return (
		<div>
			<Navigation />
			<Products />
			<Recommended />
		</div>
	);
};

export default App;

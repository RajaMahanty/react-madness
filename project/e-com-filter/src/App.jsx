import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
	return (
		<div>
			<Sidebar />
			<Navigation />
			<Recommended />
			<Products />
		</div>
	);
};

export default App;

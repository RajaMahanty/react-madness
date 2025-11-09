import ProductList from "./components/ProductList";
import UserListV2 from "./components/UserListV2";

const App = () => {
	return (
		<main>
			<h2>User List</h2>
			<UserListV2 />
			<br />
			<br />
			<h2>Product List</h2>
			<ProductList />
		</main>
	);
};

export default App;

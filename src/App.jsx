import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<main>
			<ShoppingList />
			<br />
			<br />
			<Counter />
			<br />
			<br />
			<TodoList />
			<br />
			<br />
			<Profile />
		</main>
	);
};

export default App;

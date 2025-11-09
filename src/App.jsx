import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
	return (
		<main>
			<h1>Props Exercise</h1>
			<section>
				<h2>Person</h2>
				<Person name={"Raja"} age={22} />
				<Person name={"Nubi"} age={18} />
			</section>
			<section>
				<h2>Product</h2>
				<Product name={"Laptop"} price={120000} />
				<Product name={"IPhone"} price={80000} />
			</section>
		</main>
	);
};

export default App;

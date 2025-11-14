import { useState } from "react";

const ShoppingList = () => {
	const [list, setList] = useState([]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const name = formData.get("name");
		const quantity = formData.get("quantity");

		setList([...list, { name, quantity }]);
		e.target.reset();
	};

	return (
		<div>
			<h1>Cart</h1>
			<div>
				{list.map((item, index) => (
					<ul key={index}>
						<li>Name: {item.name}</li>
						<li>Quantity: {item.quantity}</li>
					</ul>
				))}
			</div>
			<br />
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" /> {"  "}
				<label htmlFor="quantity">Quantity: </label>
				<input type="text" name="quantity" />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default ShoppingList;

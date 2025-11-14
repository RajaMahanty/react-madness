import React from "react";

const ProductList = () => {
	const products = [
		{
			id: 1,
			name: "Wireless Mouse",
			category: "Electronics",
			price: 29.99,
			inStock: true,
		},
		{
			id: 2,
			name: "Bluetooth Headphones",
			category: "Electronics",
			price: 69.99,
			inStock: true,
		},
		{ id: 3, name: "Coffee Mug", category: "Home", price: 12.5, inStock: true },
		{
			id: 4,
			name: "Notebook",
			category: "Stationery",
			price: 4.99,
			inStock: false,
		},
		{
			id: 5,
			name: "Desk Lamp",
			category: "Furniture",
			price: 34.99,
			inStock: true,
		},
		{
			id: 6,
			name: "Water Bottle",
			category: "Outdoors",
			price: 18.0,
			inStock: false,
		},
	];

	return (
		<div>
			{products.map(
				(pro) =>
					pro.inStock && (
						<ul key={pro.id}>
							<li>Name: {pro.name}</li>
							<li>Category: {pro.category}</li>
							<li>Price: ${pro.price}</li>
						</ul>
					)
			)}
		</div>
	);
};

export default ProductList;

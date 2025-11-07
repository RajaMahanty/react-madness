const ProductInfo = () => {
	const product = {
		name: "Laptop",
		price: 89700,
		availability: "In Stock",
	};

	return (
		<div>
			<h2>Name: {product.name}</h2>
			<h2>Price: {product.price}</h2>
			<h2>Available: {product.availability}</h2>
		</div>
	);
};

export default ProductInfo;

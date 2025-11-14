const List = () => {
	const numbers = [1, 2, 3, 4, 5];
	return (
		<div>
			{numbers.map((number) => (
				<ul key={Math.random()}>
					<li>{number}</li>
				</ul>
			))}
		</div>
	);
};

export default List;

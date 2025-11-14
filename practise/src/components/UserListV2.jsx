const UserListV2 = () => {
	const users = [
		{ id: 1, name: "Raja", age: 22 },
		{ id: 2, name: "Asha", age: 28 },
		{ id: 3, name: "Liam", age: 34 },
		{ id: 4, name: "Maya", age: 19 },
		{ id: 5, name: "Noah", age: 41 },
		{ id: 6, name: "Zara", age: 25 },
	];

	return (
		<div>
			{users.map((user) => (
				<ul key={user.id}>
					<li>{user.name}</li>
					<li>{user.age}</li>
				</ul>
			))}
		</div>
	);
};

export default UserListV2;

const UserList = () => {
	const usersInfo = [
		{
			username: "Raja",
			email: "rajamahanty2@gmail.com",
			location: "West Bengal",
		},
		{
			username: "Manisha",
			email: "bugsfounder@gmail.com",
			location: "Bihar",
		},
		{
			username: "Prashant",
			email: "printfpk@gmail.com",
			location: "Odisha",
		},
		{
			username: "Ananya",
			email: "ananya.desai@example.com",
			location: "Maharashtra",
		},
		{
			username: "Karan",
			email: "karan.singh@example.com",
			location: "Punjab",
		},
		{
			username: "Sneha",
			email: "sneha.patel@example.com",
			location: "Gujarat",
		},
		{
			username: "Vikram",
			email: "vikram.kumar@example.com",
			location: "Karnataka",
		},
		{
			username: "Neha",
			email: "neha.sharma@example.com",
			location: "Uttar Pradesh",
		},
		{
			username: "Ishaan",
			email: "ishaan.rao@example.com",
			location: "Tamil Nadu",
		},
	];

	return (
		<main>
			{usersInfo.map((user) => (
				<ul key={Math.random()}>
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>{user.location}</li>
				</ul>
			))}
		</main>
	);
};

export default UserList;

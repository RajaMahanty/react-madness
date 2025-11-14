import { useState } from "react";

const Profile = () => {
	const [user, setUser] = useState({ name: "", age: null });

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<h1>Name: {user.name}</h1>
			<h2>Age: {user.age}</h2>
			<hr />
			<form>
				<label htmlFor="name">Enter Name: </label>
				<input type="text" name="name" onChange={onChangeHandler} />
				<label htmlFor="age">Enter Age: </label>
				<input type="text" name="age" onChange={onChangeHandler} />
			</form>
		</div>
	);
};

export default Profile;

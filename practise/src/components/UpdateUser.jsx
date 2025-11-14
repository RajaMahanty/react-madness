import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

const UpdateUser = () => {
	const { updateUser } = useContext(UserContext);

	const submitHandler = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		updateUser(data.get("name"));
	};

	return (
		<form onSubmit={submitHandler}>
			<h2>Update User</h2>
			<input type="text" name="name" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default UpdateUser;

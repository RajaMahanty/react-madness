import { useRef } from "react";
import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const inpRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inpRef.current.value.trim()) return;

		setTodos([...todos, inpRef.current.value]);
		inpRef.current.value = "";
	};

	return (
		<>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<label htmlFor="todo">Add Tpdp:</label>
				<input ref={inpRef} type="text" name="todo" />
				<button type="submit">Add</button>
			</form>
		</>
	);
};

export default TodoList;

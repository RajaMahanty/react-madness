import React from "react";
import styles from "./style.module.css";
import { useState } from "react";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [inp, setInp] = useState("");

	const handleSubmit = () => {
		setTodos((todos) => {
			return todos.concat({
				text: inp,
				id: Math.floor(Math.random() * 10),
			});
		});

		setInp("");
	};

	const removeTodo = (id) =>
		setTodos((todos) => todos.filter((t) => t.id !== id));

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="New Todo"
				value={inp}
				className={styles.input}
				onChange={(e) => setInp(e.target.value)}
			/>

			<button className={styles.button} onClick={handleSubmit}>Submit</button>

			<ul className={styles.todosList}>
				{todos.map((todo) => (
					<li className={styles.todo} key={todo.id}>
						<span>{todo.text}</span>
						<button className={styles.close} onClick={() => removeTodo(todo.id)}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;

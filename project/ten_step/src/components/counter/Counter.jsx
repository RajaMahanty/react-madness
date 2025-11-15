import { useState } from "react";
import styles from "./style.module.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className={styles.container}>
			<div>
				<h1>Count: {count}</h1>
			</div>

			<div className={styles.btnsContainer}>
				<button onClick={() => setCount(count + 1)} className={styles.btn}>
					+
				</button>
				<button onClick={() => setCount(count - 1)} className={styles.btn}>
					-
				</button>
			</div>
		</div>
	);
};

export default Counter;

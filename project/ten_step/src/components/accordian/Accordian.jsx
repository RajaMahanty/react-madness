import { useState } from "react";
import styles from "./style.module.css";

const Accordian = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<section className={styles["accordian-card"]}>
			<div className={styles.header} onClick={() => setIsActive(!isActive)}>
				<div>{title}</div>
				<p className={styles.icon}>{isActive ? "-" : "+"}</p>
			</div>

			<div className={styles.content}>
				{isActive && <p className={styles["card-info"]}>{content}</p>}
			</div>
		</section>
	);
};

export default Accordian;

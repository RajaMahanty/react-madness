import { useState } from "react";
import styles from "./style.module.css";

const Dynamic = () => {
	const [backgroundColor, setBackgroundColor] = useState("white");
	const [textColor, setTextColor] = useState("#1b1b1b");

	const handleClick = () => {
		setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
		setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
	};

	return (
		<div style={{ backgroundColor, color: textColor }}>
			<button
				onClick={handleClick}
				style={{
					color: textColor,
					border: `2px solid ${textColor}`,
				}}
			>
				{backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
			</button>

			<section className={styles.content}>
				<h1>
					Welcome to A <br />
					REAL WORLD!
				</h1>
			</section>
		</div>
	);
};

export default Dynamic;

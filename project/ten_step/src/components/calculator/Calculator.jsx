import { useState } from "react";
import styles from "./style.module.css";

const Calculator = () => {
	const [inputValue, setInputValue] = useState("");

	const calculateSum = () => {
		try {
			// safer than eval & allowed by React Compiler
			setInputValue(String(Function(`return ${inputValue}`)()));
		} catch {
			setInputValue("Error");
		}
	};

	const display = (value) => setInputValue(inputValue + value);
	const calculate = () => calculateSum();
	const clear = () => setInputValue("");

	return (
		<form className={styles.calculator} name="calc">
			<input
				type="text"
				className={styles.value}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			<span className={`${styles.num} ${styles.clear}`} onClick={() => clear()}>
				C
			</span>
			<span onClick={() => display("/")}>/</span>
			<span onClick={() => display("*")}>*</span>
			<span onClick={() => display("7")}>7</span>
			<span onClick={() => display("8")}>8</span>
			<span onClick={() => display("9")}>9</span>
			<span onClick={() => display("-")}>-</span>
			<span onClick={() => display("4")}>4</span>
			<span onClick={() => display("5")}>5</span>
			<span onClick={() => display("6")}>6</span>
			<span className={styles.plus} onClick={() => display("+")}>
				+
			</span>

			<span onClick={() => display("1")}>1</span>
			<span onClick={() => display("2")}>2</span>
			<span onClick={() => display("3")}>3</span>
			<span onClick={() => display("0")}>0</span>
			<span onClick={() => display("00")}>00</span>
			<span onClick={() => display(".")}>.</span>
			<span className={`${styles.num} ${styles.equal}`} onClick={calculate}>
				=
			</span>
		</form>
	);
};

export default Calculator;

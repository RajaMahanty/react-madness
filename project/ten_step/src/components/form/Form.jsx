import React, { useState } from "react";
import styles from "./style.module.css";

const Form = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [errorUserName, setErrorUserName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

	const [userColor, setUserColor] = useState("");
	const [emailColor, setEmailColor] = useState("");
	const [passwordColor, setPasswordColor] = useState("");
	const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

	const validate = (e) => {
		e.preventDefault();

		// Validate username
		if (username.length > 8) {
			setErrorUserName("");
			setUserColor("green");
		} else {
			setErrorUserName("Username must be 8 letters long.");
			setUserColor("red");
		}

		// Validate email
		if (email.includes("@")) {
			setErrorEmail("");
			setEmailColor("green");
		} else {
			setErrorEmail("Email should contain @");
			setEmailColor("red");
		}

		// Validate password
		if (password.length > 8) {
			setErrorPassword("");
			setPasswordColor("green");
		} else {
			setErrorPassword("Password must be 8 letters long.");
			setPasswordColor("red");
		}

		// Validate confirm password
		if (password === confirmPassword && confirmPassword !== "") {
			setErrorConfirmPassword("");
			setConfirmPasswordColor("green");
		} else {
			setErrorConfirmPassword("Passwords do not match.");
			setConfirmPasswordColor("red");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<form className={styles.form}>
					<input
						type="text"
						placeholder="Name"
						className={styles.input}
						style={{ borderBottomColor: userColor }}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<p className={styles.error}>{errorUserName}</p>

					<input
						type="text"
						placeholder="Email"
						className={styles.input}
						style={{ borderBottomColor: emailColor }}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p className={styles.error}>{errorEmail}</p>

					<input
						type="password"
						placeholder="Password"
						className={styles.input}
						style={{ borderBottomColor: passwordColor }}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p className={styles.error}>{errorPassword}</p>

					<input
						type="password"
						placeholder="Confirm Password"
						className={styles.input}
						style={{ borderBottomColor: confirmPasswordColor }}
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<p className={styles.error}>{errorConfirmPassword}</p>

					<button className={styles.submitBtn} onClick={validate}>
						Submit
					</button>
				</form>

				<div className={styles.cardImage}></div>
			</div>
		</div>
	);
};

export default Form;

import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		case "reset":
			return { ...state, count: 0 };
		default:
			return state;
	}
};

// Styles ar AI generated here
const styles = {
	app: {
		fontFamily: "Inter, Roboto, Arial, sans-serif",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		margin: 0,
		// subtle colored glows + soft background for depth
		background:
			"radial-gradient(1200px 600px at 10% 10%, rgba(11,132,255,0.06) 0%, transparent 12%), radial-gradient(800px 400px at 90% 90%, rgba(59,130,246,0.04) 0%, transparent 18%), linear-gradient(180deg, #f5f7fb 0%, #eef3fb 100%)",
		perspective: "900px",
	},
	card: {
		// glass surface with layered highlights to simulate liquid glass
		background:
			"linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(245,249,255,0.35) 40%, rgba(225,238,255,0.18) 100%), radial-gradient(400px 120px at 10% 10%, rgba(255,255,255,0.55) 0%, transparent 30%)",
		WebkitBackdropFilter: "blur(10px) saturate(120%)",
		backdropFilter: "blur(10px) saturate(120%)",
		padding: "28px",
		borderRadius: "16px",
		// multiple shadows for 3D depth + inner glow for liquid edge
		boxShadow:
			"0 30px 60px rgba(2,6,23,0.12), 0 8px 24px rgba(11,132,255,0.06), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -8px 24px rgba(11,132,255,0.03)",
		border: "1px solid rgba(255,255,255,0.45)",
		textAlign: "center",
		minWidth: "300px",
		// subtle 3D tilt
		transformStyle: "preserve-3d",
		transform: "translateZ(20px) rotateX(4deg)",
		position: "relative",
		overflow: "hidden",
	},
	title: {
		margin: "0 0 8px 0",
		fontSize: "20px",
		color: "#0f172a",
	},
	count: {
		margin: "0 0 16px 0",
		fontSize: "36px",
		fontWeight: 600,
		color: "#0b84ff",
		textShadow: "0 4px 18px rgba(11,132,255,0.12)",
	},
	buttonRow: {
		display: "flex",
		gap: "8px",
		justifyContent: "center",
	},
	button: {
		padding: "8px 14px",
		fontSize: "16px",
		borderRadius: "10px",
		border: "none",
		cursor: "pointer",
		// glassy primary with slight elevation
		background: "linear-gradient(180deg, #1287ff 0%, #0a6fe0 100%)",
		color: "#fff",
		boxShadow: "0 8px 20px rgba(11,132,255,0.18)",
		transition: "transform 0.12s ease, box-shadow 0.12s ease",
	},
	secondaryButton: {
		padding: "8px 14px",
		fontSize: "16px",
		borderRadius: "10px",
		border: "1px solid rgba(255,255,255,0.6)",
		cursor: "pointer",
		// translucent glass button
		background:
			"linear-gradient(180deg, rgba(255,255,255,0.48), rgba(255,255,255,0.2))",
		color: "#0f172a",
		boxShadow:
			"inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(2,6,23,0.06)",
		backdropFilter: "blur(4px)",
	},
	resetButton: {
		padding: "8px 12px",
		fontSize: "14px",
		borderRadius: "10px",
		border: "none",
		cursor: "pointer",
		background: "linear-gradient(180deg, #ff6b6b 0%, #ef4444 100%)",
		color: "#fff",
		boxShadow: "0 8px 20px rgba(239,68,68,0.14)",
	},
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div style={styles.app}>
			<div style={styles.card}>
				<h1 style={styles.title}>useReducer</h1>
				<h2 style={styles.count}>Count: {state.count}</h2>
				<div style={styles.buttonRow}>
					<button
						style={styles.button}
						onClick={() => dispatch({ type: "increment" })}
					>
						+
					</button>
					<button
						style={styles.secondaryButton}
						onClick={() => dispatch({ type: "decrement" })}
					>
						-
					</button>
					<button
						style={styles.resetButton}
						onClick={() => dispatch({ type: "reset" })}
					>
						RESET
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;

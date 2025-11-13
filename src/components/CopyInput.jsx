import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
	const [inputValue, setInputValue] = useState("");
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(inputValue).then(() => {
			setCopied(true);
			setInterval(() => {
				setCopied(false);
			}, 2000);
		});
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			<button disabled={copied} onClick={handleCopy}>
				Copy
			</button>
			<PopupContent copied={copied} />
		</div>
	);
};

export default CopyInput;

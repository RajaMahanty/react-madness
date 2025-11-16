import { accordionData } from "../../data/accordian";
import Accordian from "./Accordian";
import styles from "./style.module.css";

const Accordians = () => {
	return (
		<div className={styles.accordian}>
			{accordionData.map(({ title, content }, idx) => (
				<Accordian key={idx} title={title} content={content} />
			))}
		</div>
	);
};

export default Accordians;

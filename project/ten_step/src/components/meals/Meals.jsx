import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

const Meals = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=SeaFood")
			.then((res) => {
				setItems(res.data.meals || []);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
		<section key={idMeal} className={styles.card}>
			<img src={strMealThumb} alt={strMeal} className={styles.image} />
			<section className={styles.content}>
				<p>{strMeal}</p>
				<p>#{idMeal}</p>
			</section>
		</section>
	));

	return <div className={styles.itemsContainer}>{itemsList}</div>;
};

export default Meals;

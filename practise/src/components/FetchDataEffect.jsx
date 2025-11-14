import { useEffect } from "react";
import { useState } from "react";

const FetchDataEffect = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const data = await response.json();
			setPosts(data);
		};

		getData();
	}, []);

	return (
		<div>
			<h1>FetchDataEffect - Data</h1>
			{posts.map((item) => (
				<ul key={item.id}>
					<li>Title: {item.title}</li>
					<li>Description: {item.body}</li>
				</ul>
			))}
		</div>
	);
};

export default FetchDataEffect;

import React, { useState } from "react";
import styles from "./style.module.css";

// Extract static data outside the component to avoid re-creating on each render
const TESTIMONIALS = [
	{
		quote: "Amazing experience! Highly recommend to everyone.",
		author: "Sarah Johnson",
	},
	{
		quote: "Outstanding quality and excellent customer service.",
		author: "Michael Chen",
	},
	{
		quote: "Game changer for our business. Worth every penny!",
		author: "Emily Rodriguez",
	},
	{
		quote: "Simple, effective, and reliable. Couldn't ask for more.",
		author: "David Kim",
	},
];

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};

	const handleNextClick = () => {
		setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length);
	};

	const { quote, author } = TESTIMONIALS[currentIndex];

	return (
		<figure className={styles.testimonials}>
			<blockquote className={styles.testimonialsQuote}>{quote}</blockquote>

			<figcaption className={styles.testimonialsAuthor}>— {author}</figcaption>

			<nav
				className={styles.testimonialsNav}
				aria-label="Testimonial navigation"
			>
				<button
					type="button"
					className={styles.navButton}
					onClick={handlePrevClick}
					aria-label="Previous testimonial"
				>
					{"<"}
				</button>
				<button
					type="button"
					className={styles.navButton}
					onClick={handleNextClick}
					aria-label="Next testimonial"
				>
					{">"}
				</button>
			</nav>
		</figure>
	);
};

export default Testimonial;

import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/237/200/300",
		title: "Puppy",
		description: "A cute puppy",
	},
	{
		image: "https://picsum.photos/id/7/4728/3168",
		title: "A Meeting",
		description: "A meeting in a coffe shop",
	},
	{
		image: "https://picsum.photos/id/40/4106/2806",
		title: "Cat",
		description: "A cute cat",
	},
	{
		image: "https://picsum.photos/id/82/1500/997",
		title: "Flowers",
		description: "Beautiful flowers",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
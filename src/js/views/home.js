import React from "react";

import "../../styles/home.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container text-center mt-5">
		<Carousel>
			<Carousel.Item interval={2000}>
				<Link to="/people/miau">
					<img
						className="d-block w-100"
						src="https://images5.alphacoders.com/111/1113894.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>PEOPLE</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>

			<Carousel.Item interval={2000}>
				<Link to="/planets/wau">
					<img
						className="d-block w-100"
						src="https://www.itl.cat/pngfile/big/0-9431_star-star-wars-planets-background.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>PLANETS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	</div>
);

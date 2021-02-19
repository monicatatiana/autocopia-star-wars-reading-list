import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { DescriptionPlanets } from "../views/descriptionPlanets";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="container text-center mt-5 d-flex justify-content-between"
			style={{ overflowX: "scroll", width: "800px" }}>
			{store.planets.map((arrayplanets, index) => (
				<Card key={index} style={{ minWidth: "250px", margin: "20px" }}>
					<Card.Img
						variant="top"
						src="https://heavy.com/wp-content/uploads/2019/11/star-wars-jedi-fallen-order-planets.jpg?quality=65&strip=all"
					/>
					<Card.Body>
						<Card.Title>{arrayplanets.name}</Card.Title>
						<Card.Text>
							{arrayplanets.climate}
							<br />
							{arrayplanets.gravity}
							<br />
							{arrayplanets.terrain}
						</Card.Text>
						<ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
							<Link to={`/descriptionPlanets/${index}`}>
								<Button variant="primary">Learn more</Button>
							</Link>

							<Button variant="outline-warning">
								<i className="far fa-heart" />
							</Button>
						</ButtonToolbar>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { DescriptionPeople } from "../views/descriptionPeople";
//import { Link } from "react-router-dom";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="container text-center mt-5 d-flex justify-content-between"
			style={{ overflowX: "scroll", width: "800px" }}>
			{store.people.map((arraypeople, index) => (
				<Card key={index} style={{ minWidth: "250px", margin: "20px" }}>
					<Card.Img variant="top" src="https://wallpaperaccess.com/full/143019.jpg" />
					<Card.Body>
						<Card.Title>{arraypeople.name}</Card.Title>
						<Card.Text>
							{arraypeople.height}
							<br />
							{arraypeople.hair_color}
							<br />
							{arraypeople.skin_color}
							<br />
							{arraypeople.eye_color}
							<br />
						</Card.Text>
						<ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
							<Link to={`/descriptionPeople/${index}`}>
								<Button variant="primary">Learn more</Button>
							</Link>

							<Link onClick={() => actions.addFavorite(arraypeople.name, "people")}>
								<Button variant="outline-warning">
									<i className="far fa-heart" />
								</Button>
							</Link>
						</ButtonToolbar>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};
//<Button variant="outline-warning">
//<i className="far fa-heart" />
//</Button>

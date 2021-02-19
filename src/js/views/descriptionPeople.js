import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Image, Col, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";

export const DescriptionPeople = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const elementsById = store.people[params.theid];
	return (
		<div className="mt-5">
			<Container>
				<Row>
					<Col xs={6} md={6}>
						<Image
							className="w-100 h-100"
							src="https://upload.wikimedia.org/wikipedia/en/d/d2/LegoStarWarsSkywalkerSaga.jpg"
							style={{ width: "100px", height: "100px" }}
							rounded
						/>
					</Col>
					<Col xs={6} md={6}>
						<div>
							<Card>
								<Card.Header as="h5">Character</Card.Header>
								<Card.Body>
									<Card.Title>{elementsById.name}</Card.Title>
									<Card.Text>
										Star Wars (conocida también en español como La guerra de las galaxias)5​6​7​ es
										una franquicia compuesta primordialmente de una serie de películas concebidas
										por el cineasta estadounidense George Lucas en la década de 1970, y producidas y
										distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las
										vivencias de un grupo de personajes que habitan en una galaxia ficticia e
										interactúan con elementos como «la Fuerza», un campo de energía metafísico y
										omnipresente8​ que posee un «lado luminoso» impulsado por la sabiduría, la
										nobleza y la justicia y utilizado por Jedi, y un «lado oscuro» usado por los
										Sith y provocado por la ira, el miedo y el odio.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
				<br />
				<Row>
					<Table responsive>
						<thead>
							<tr>
								<th>Name</th>
								<th>Birth</th>
								<th>Gender</th>
								<th>Height</th>
								<th>Skin</th>
								<th>Eye-Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{elementsById.name}</td>
								<td>{elementsById.birth_year}</td>
								<td>{elementsById.gender}</td>
								<td>{elementsById.height}</td>
								<td>{elementsById.skin_color}</td>
								<td>{elementsById.eye_color}</td>
							</tr>
						</tbody>
					</Table>
				</Row>
			</Container>
		</div>
	);
};

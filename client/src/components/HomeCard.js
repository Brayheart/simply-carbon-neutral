import React from 'react'
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
// import houseImage from "../images/home.png";

const imageAddress = "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80";

function HomeCard() {
    return (
        <Card className="mb-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageAddress} />
            <Card.Body>
                <Card.Title>Home</Card.Title>
                <Card.Text>
                    <i>The impact of your electricity and heat</i>
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>

                <Form.Control as="select" custom className="mt-0" id="homeSelection">
                        <option>How big is your home?</option>
                        <option>Small</option>
                        <option>Average</option>
                        <option>Large</option>
                        <option>Very large</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="electricitySelection">
                        <option>Any electricity from renewables?</option>
                        <option>100%</option>
                        <option>75%</option>
                        <option>50%</option>
                        <option>25%</option>
                        <option>None</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="heatingSelection">
                    <option>Any heating from renewables?</option>
                        <option>100%</option>
                        <option>75%</option>
                        <option>50%</option>
                        <option>25%</option>
                        <option>None</option>
                    </Form.Control>

                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default HomeCard

{/* <ListGroupItem>Size of your home</ListGroupItem>
<ListGroupItem>% electricity from renewables</ListGroupItem>
<ListGroupItem>% heat from renewables</ListGroupItem> */}


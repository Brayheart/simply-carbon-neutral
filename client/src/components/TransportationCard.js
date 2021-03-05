import React from 'react'
import { Card, ListGroup, ListGroupItem, Form} from 'react-bootstrap'

const imageAddress = "https://images.unsplash.com/photo-1586684075772-746ed499fbf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

function TransportationCard() {
    return (
        <Card className="mb-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageAddress} />
            <Card.Body>
                <Card.Title>Transportation</Card.Title>
                <Card.Text>
                    <i>Burn any fossil fuels getting around?</i>
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>

                <Form.Control as="select" custom className="mt-0" id="gasSelection">
                        <option>Did you buy gas?</option>
                        <option>None</option>
                        <option>1-10 Gallons</option>
                        <option>10-20 Gallons</option>
                        <option>20-30 Gallons</option>
                        <option>More than 30 Gallons</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="sharingSelection">
                        <option>Any bus or ride sharing?</option>
                        <option>None</option>
                        <option>1-25 Miles</option>
                        <option>25-50 Miles</option>
                        <option>50-75 Miles</option>
                        <option>More than 75 Miles</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="taxiSelection">
                        <option>Solo Taxi/Uber/Lyft rides?</option>
                        <option>1-25 Miles</option>
                        <option>25-50 Miles</option>
                        <option>50-75 Miles</option>
                        <option>More than 75 Miles</option>
                    </Form.Control>

                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default TransportationCard

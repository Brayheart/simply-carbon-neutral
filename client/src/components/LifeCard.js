import React from 'react'
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'

const imageAddress = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

function LifeCard() {
    return (
        <Card className="mb-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageAddress} />
            <Card.Body>
                <Card.Title>Life</Card.Title>
                <Card.Text>
                    <i>What you eat & how much you buy</i>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>

                    <Form.Control as="select" custom className="mt-0" id="dietSelection">
                        <option>What is your diet?</option>
                        <option>Vegan</option>
                        <option>Vegetarian</option>
                        <option>Occasional Meat</option>
                        <option>Heavy Meat Eater</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="recyclingSelection">
                        <option>How much do you recycle?</option>
                        <option>Everything possible</option>
                        <option>Occasionally</option>
                        <option>A little</option>
                        <option>None</option>
                    </Form.Control>

                    <Form.Control as="select" custom className="mt-3" id="consumerSelection">
                        <option>Level of purchasing?</option>
                        <option>Very little</option>
                        <option>An average amount</option>
                        <option>A lot</option>
                    </Form.Control>

                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default LifeCard

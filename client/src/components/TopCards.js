import React from 'react'
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'

function TopCards() {
    return (
        <>
            <Card className="mb-3" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Our Goal</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <p>
                            To significantly fund climate change projects that offset CO2 and move us towards a zero carbon future.
                    </p>
                    </ListGroupItem>
                </ListGroup>
            </Card>

            <Card className="mb-3" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>How We Do It</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <p>
                            Make it easy for millions to give a little, be conscious of their CO2 footprint, and move towards living carbon free.
                    </p>
                    </ListGroupItem>
                </ListGroup>
            </Card>

            <Card className="mb-3" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Our Philosophy</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <p>
                            The 80/20 rule. Use localized average data and simple questions to calculate your approximate CO2 footprint.
                    </p>
                    </ListGroupItem>
                </ListGroup>
            </Card>


        </>

    )
}

export default TopCards



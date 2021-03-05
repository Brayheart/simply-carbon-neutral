import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'


function NavbarMenu() {
    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand href="/">Simply Carbon Neutral</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Item className="mx-3 my-auto"><i>Real Time Carbon Footprint</i></Nav.Item>
                    <Nav.Item className="mx-3 my-auto"><i>Real Time Cost</i></Nav.Item>
                    <Nav.Link href="/purchase">Purchase</Nav.Link>
                    <Nav.Link href="/history">History</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavbarMenu

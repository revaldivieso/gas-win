import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Navegation = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand to="/">Gas Win</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/RegisterUser">Personas</Nav.Link>
        <Nav.Link href="/UserValidation">Empresas</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default Navegation;
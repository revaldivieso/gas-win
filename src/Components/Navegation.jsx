import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import icon from '../Images/icon.png'
import './RegisterUser.css';

const Navegation = () => {
  return <div>
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={icon}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/RegisterUser">Personas</Nav.Link>
          <Nav.Link href="/UserValidation">Empresas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <footer class="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
            <p>Copyright &copy; 2020 Vianny Reyes</p>
          </div>
        </div>
      </div>
    </footer>
  </div>

}

export default Navegation;
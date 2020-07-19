import React from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import './RegisterUser.css';

const RegisterUser = () => {
    return <Container fluid>
          <Row className="justify-content-md-center">

            <Form className="col-md-4 form">
                <Form.Group controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Nombre" />
                </Form.Group>

                <Form.Group controlId="formGridRut">
                    <Form.Label>Rut</Form.Label>
                    <Form.Control placeholder="Rut" />
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridCargo">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control placeholder="Cargo" />
                </Form.Group>

                <Button className="align-items-center" variant="primary" type="submit" block>
                    Enviar
               </Button>
            </Form>
        </Row>
    </Container>
}

export default RegisterUser;
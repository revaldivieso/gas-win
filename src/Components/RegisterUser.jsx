import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterUser = () => {
    return <Container>
        <Form>
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


            <Button className="align-items-center" variant="primary" type="submit">
                Enviar
            </Button>
        </Form>

    </Container>
}

export default RegisterUser;
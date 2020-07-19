import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import './RegisterUser.css';

const UserValidation = () => {
    return <Container>
        <Form>
            <Form.Row className="align-items-center">
                <Col sm={5} className="my-1">
                    <Form.Label for="inlineFormInputName" srOnly>
                        Name
                    </Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Buscar Cliente" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit">Buscar</Button>
                </Col>
            </Form.Row>
        </Form>
    </Container>
}

export default UserValidation;
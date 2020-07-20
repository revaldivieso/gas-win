import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { findByRut } from "../ServicePerson";
import './RegisterUser.css';
import RegisterUser from './RegisterUser';

const UserValidation = () => {
    const [rut, setRut] = React.useState("");
    const [found, setFound] = React.useState(undefined);
    
    const [user, setUser] = React.useState(undefined);
    
    const onSend = (evt) => {
        evt.preventDefault();
        setUser(undefined);
        findByRut(rut)
        .then(res => {
            if(!res || !res.name) {
                setFound(false);
            } else {
                setFound(true);
                setUser(res);
            }
        })
        .catch(err => {
            setFound(false);
            console.log(err);
        });
        
    }

    const onChangeRut = (evt) => {
        setRut(evt.target.value);
    }
    return <Container>
        <Form onSubmit={onSend}>
            <Form.Row className="align-items-center">
                <Col sm={5} className="my-1">
                    <Form.Label for="inlineFormInputName" srOnly>
                        Name
                    </Form.Label>
                    <Form.Control value={rut} onChange={onChangeRut} id="inlineFormInputName" placeholder="Buscar Cliente por rut" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit">Buscar</Button>
                </Col>
            </Form.Row>
        </Form>
        {found === false && <h5>Rut no Encontrado</h5>}
        {user && <RegisterUser user={user} />}
    </Container>
}

export default UserValidation;
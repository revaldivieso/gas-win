import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { savePerson, updateStatusPerson } from '../ServicePerson';
import './RegisterUser.css';

const RegisterUser = (props) => {
    const [user, setUser] = React.useState(undefined)
    const [status, setStatus] = React.useState(undefined)
    const [error, setError] = React.useState("");
    const [args, setArgs] = React.useState(props.user || {});
    const onSave = async (evt) => {
        evt.preventDefault();
        const inputs = evt.target.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            args[inputs[i].name] = inputs[i].value;
        }
        try {
            const res = await savePerson(args);
            setUser(res);
        } catch (err) {

            console.log(err);
        }
    }
    const onChangeStatus = async (status) => {
        setStatus(status);
        try {
            const res = await updateStatusPerson(props.user._id, status)
            if (!res && !res.name) {

                setUser(undefined);
            }
            setUser(res);
        } catch {

            setUser(undefined);
        }
    }
    const onChangeData = (evt) => {
        setArgs({ ...args, [evt.target.name]: evt.target.value });
    }
    return <Container fluid>
        <Row className="justify-content-md-center">
            {user && <h4>
                {!props.user ?
                    `Gracias ${user.name} por registrarte con nosotros, te hemos registrado con el identificador ${user._id}` :
                    `Hemos ${status === "reject" ? "Rechazado" : "Aprobado"}, el registro de ${props.user.name}`
                }
            </h4>}
        </Row>
        {!user && <div className="justify-content-md-center">
            <Row className="justify-content-md-center">
                {props.user ? <h2>Validación de Cliente</h2> : <h2>Registro de Cliente</h2>}
            </Row>
            <Row className="justify-content-md-center">
                <Form
                    className="col-md-4 form"
                    onSubmit={props.user ? (evt => evt.preventDefault()) : onSave}>
                    <Form.Group controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        {props.user && <div>{props.user.name}</div>}
                        {!props.user && <Form.Control onChange={onChangeData} name="name" placeholder="Nombre" value={args.name} />}
                    </Form.Group>

                    <Form.Group controlId="formGridRut">
                        <Form.Label>Rut</Form.Label>
                        {props.user && <div>{props.user.rut}</div>}
                        {!props.user && <Form.Control onChange={onChangeData} name="rut" placeholder="Rut" value={args.rut} />}
                    </Form.Group>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Dirección</Form.Label>
                        {props.user && <div>{props.user.address}</div>}
                        {!props.user && <Form.Control onChange={onChangeData} name="address" placeholder="1234 Main St" value={args.address} />}
                    </Form.Group>

                    <Form.Group controlId="formGridCargo">
                        <Form.Label>Cargo</Form.Label>
                        {props.user && <div>{props.user.position}</div>}
                        {!props.user && <Form.Control onChange={onChangeData} name="position" placeholder="Cargo" value={args.position} />}
                    </Form.Group>
                    {!props.user && <Button className="align-items-center" variant="primary" type="submit" block>
                        Enviar
               </Button>}
                    {props.user && props.user.status === 'pending' && <Row>
                        <Col>
                            <Button
                                className="align-items-center"
                                variant="primary"
                                onClick={async () => await onChangeStatus('aproved')}
                                block>
                                Aprobar
                        </Button>
                        </Col>
                        <Col>
                            <Button
                                className="align-items-center"
                                variant="primary"
                                onClick={async () => await onChangeStatus('reject')}
                                block>
                                Rechazar
                        </Button>
                        </Col>
                    </Row>
                    }
                    {props.user && props.user.status !== 'pending' ? props.user.status === 'aproved' ? <h1>Cliente Aprobado</h1> : <h1>Cliente Rechazado</h1> : undefined}
                </Form>
            </Row>
        </div>}
    </Container>
}

export default RegisterUser;
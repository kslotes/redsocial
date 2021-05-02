import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import "./Login.css";

const Login = () => {
    return (
        <Row xs={1} className="text-center">
            <Col>
                <h2>Iniciar Sesión</h2>
            </Col>
            <Col>
                <Form>
                    <Col>
                        <Form.Group controlId="formNumeroLegajo">
                            <Form.Label>Número de legajo</Form.Label>
                            <Form.Control type="number" placeholder="Número de legajo" />
                            <Form.Text className="text-muted">Nunca compartiremos esta informacion</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formContraseña">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Button variant="dark" size="lg" className="btn-ingresar">
                            INGRESAR
                        </Button>
                    </Col>
                    <Col className="mt-3">
                        <Button variant="dark" size="sm" className="btn-forgot">
                            Olvidé mi contraseña
                        </Button>
                    </Col>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;

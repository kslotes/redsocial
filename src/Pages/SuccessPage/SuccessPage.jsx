import {Col, Row, Container, Button} from "react-bootstrap";
import {FaCheckCircle} from "react-icons/fa";
import "./SuccessPage.css";
const SuccessPage = () => {
    return (
        <Container fluid className="fondo">
            <Row xs={1} className="mt-3 text-center">
                <Col>
                    <h5>
                        <b>Recursos humanos Comunicaciones</b>
                    </h5>
                </Col>
                <Col className="mt-3">
                    <h3 className="label-sesion">Inicio de Sesión Exitoso</h3>
                </Col>
                <Col className="mt-3">
                    <FaCheckCircle id="icon-check" />
                </Col>
                <Col className="mt-3">
                    <h2 className="label-sesion">¡Bienvenid@!</h2>
                </Col>
                <Col className="mt-4">
                      <h6>A continuación tendrás todas las novedades
                        y trámites disponibles a realizar.
                      </h6>
                </Col>
                <Col className="mt-3">
                      <Button variant="dark" size="lg">Continuar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SuccessPage;

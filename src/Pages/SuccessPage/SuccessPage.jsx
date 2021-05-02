import {Col, Row, Container} from "react-bootstrap";
import "./SuccessPage.css";
const SuccessPage = () => {
    return (
        <Container fluid className="fondo">
            <Row>
                <Col className="mt-3 text-center" xs={12}>
                    <h4>
                        <b>Recursos humanos Comunicaciones</b>
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3">
                    <h6>Bienvenido a la red social de la Municipalidad de San Antonio de Areco . Aquí podrás realizar diversos trámites y enterarte las últimas novedades.</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default SuccessPage;

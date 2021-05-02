import {Row, Col, Container, Image} from "react-bootstrap";
import "./HomePage.css";
import imagen2 from "./Imagenes/22.png";
import NavBar from "../../Components/common/NavBar/NavBar";
const HomePage = () => {
    return (
        <Container fluid className="fondo">
            <Row xs={1}>
                <Col xs={12} className="text-center">
                    <h3 id="text-novedades">Novedades</h3>
                </Col>
            </Row>
            <Row xs={2} className="mt-3">
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
            </Row>
            <Row xs={2} className="mt-3">
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
            </Row>
            <Row xs={2} className="mt-3">
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
                <Col>
                    <Image src={imagen2} thumbnail />
                </Col>
            </Row>
            <Row>
                <NavBar />
            </Row>
        </Container>
    );
};

export default HomePage;

import React from "react";
import SeccionIzquierda from "../../Components/SeccionIzquierda/SeccionIzquierda";
import SeccionDerecha from "../../Components/SeccionDerecha/SeccionDerecha";
import RedesSociales from "../../Components/RedesSociales/RedesSociales";
import {Col, Container, Row} from "react-bootstrap";
import "./MainPage.css";

const MainPage = () => {
    return (
        <Container fluid className="fondo">
            <Row xs={1} sm={2} md={2} lg={2}>
                <Col>
                    <SeccionIzquierda />
                </Col>
                <Col>
                    <SeccionDerecha />
                </Col>
                <Col>
                    <RedesSociales />
                    <i>Municipalidad de Areco 2021. Todos los derechos reservados.&#174; </i>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;

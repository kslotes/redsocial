import React from "react";
import Login from "../../Components/MainPage/Login/Login";
import RedesSociales from "../../Components/MainPage/RedesSociales/RedesSociales";
import {Col, Container, Row} from "react-bootstrap";
import "./MainPage.css";
import Register from "../../Components/MainPage/Register/Register";
import ContactUs from "../../Components/MainPage/ContactUs/ContactUs";

const MainPage = () => {
    return (
        <Container fluid className="fondo">
            <Row xs={1} sm={2} md={2} lg={2}>
                <Col>
                    <Login />
                </Col>
            </Row>
            <Row xs={2} className="mt-5">
                <Col xs={6}>
                    <Register />
                </Col>
                <Col xs={6}>
                    <ContactUs />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <RedesSociales />
                </Col>
            </Row>
            <Row className="mt-4 text-center">
                <Col>
                    <small>Municipalidad de San Antonio de Areco 2021. Derechos Reservados.&#174; </small>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;

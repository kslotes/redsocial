import React from "react";
import Login from "../../Components/Login/Login"
import RedesSociales from "../../Components/RedesSociales/RedesSociales";
import {Col, Container, Row} from "react-bootstrap";
import "./MainPage.css";
import Register from "../../Components/Register/Register";
import ContactUs from "../../Components/ContactUs/ContactUs";

const MainPage = () => {
    return (
        <Container fluid className="fondo">
            <Row xs={1} sm={2} md={2} lg={2}>
                <Col>
                    <Login />
                </Col>
                <Col>
                    <Register/>
                    <ContactUs/>
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

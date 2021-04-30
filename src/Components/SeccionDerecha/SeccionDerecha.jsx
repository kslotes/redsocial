import styled from "styled-components";
import ContactUs from "../ContactUs/ContactUs";
import Register from "../Register/Register";
const Seccion = styled.div`
      margin-top: 10rem;
    width: 50%;
    height: 40vh;
`;

const LineaDivisoria = styled.div`
    width: 50%;
    height: 1px;
    border-bottom: 1px solid #c3c4c6;
`;

const SeccionDerecha = () => {
    return (
        <Seccion className="container-fluid d-flex flex-column justify-content-between">
            <Register/>
            <LineaDivisoria className="align-self-center"/>
            <ContactUs />
        </Seccion>
    );
};

export default SeccionDerecha;

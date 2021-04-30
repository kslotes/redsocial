import styled from "styled-components";
import ContactUs from "../ContactUs/ContactUs";
import Register from "../Register/Register";

const LineaDivisoria = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #c3c4c6;
`;

const SeccionDerecha = () => {
    return (
        <div className="d-flex flex-column justify-content-between">
            <Register/>
            <ContactUs />
        </div>
    );
};

export default SeccionDerecha;

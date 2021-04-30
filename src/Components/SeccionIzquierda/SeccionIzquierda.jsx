import styled from "styled-components";
import Login from "../../Components/Login/Login";

const Seccion = styled.div`
    width: 50%;
    height: 80vh;
`;

const SeccionIzquierda = () => {
    return (
        <Seccion className="container-fluid d-flex flex-column justify-content-around">
            <Login />
        </Seccion>
    );
};

export default SeccionIzquierda;

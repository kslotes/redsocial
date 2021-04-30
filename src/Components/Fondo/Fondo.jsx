import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    background-color: #dedee1;
    height: 96vh;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 12px;
    border: 2px solid #bec7cf;
    padding: 1rem;
`;

const Fondo = ({children}) => {
    return <MainContainer>{children}</MainContainer>;
};

export default Fondo;

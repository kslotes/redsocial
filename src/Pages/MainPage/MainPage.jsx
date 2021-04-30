import React from "react";
import SeccionIzquierda from "../../Components/SeccionIzquierda/SeccionIzquierda";
import SeccionDerecha from "../../Components/SeccionDerecha/SeccionDerecha";
import {LineaDivisoria} from "../../Components/BasicComponents/LineaDivisoria";
import Icons from "../../Components/Icons/Icons"

const MainPage = () => {
    return (
        <div className="d-flex flex-column">
            <div className="container-fluid d-flex flex-row">
                <SeccionIzquierda />
                <LineaDivisoria />
                <SeccionDerecha />
            </div>
            <div className="container-fluid d-flex flex-column align-items-center">
                  <Icons/>
                  <footer><i>Municipalidad de Areco 2021. Todos los derechos reservados.&#174; </i></footer>
            </div>
        </div>
    );
};

export default MainPage;

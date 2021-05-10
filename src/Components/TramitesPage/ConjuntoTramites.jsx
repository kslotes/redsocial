import {Row} from "react-bootstrap";
import Tramite from "./Tramite";

const ConjuntoTramites = ({tramites}) => {
    return (
        <Row className="text-center">
            {tramites.map((data, i) => {
                  return (
                        <Tramite texto={data.nombre}/>
                  )
            })}
        </Row>
    );
};

export default ConjuntoTramites;
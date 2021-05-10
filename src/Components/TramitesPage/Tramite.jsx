import {Button, Col} from "react-bootstrap";

const Tramite = ({funcion, texto}) => {
    return (
        <Col xs={6} className="mt-4">
            <Button variant="dark" size="lg" onClick={funcion}>
                {texto}
            </Button>
        </Col>
    );
};

export default Tramite;

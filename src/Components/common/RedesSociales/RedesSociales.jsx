import {Row, Col} from "react-bootstrap";
import './RedesSociales.css'
const RedesSociales = () => {
    return (
        <Row className="text-center">
            <Col>
                <a className="icon icon-facebook bi bi-facebook mr-2" href="https://www.facebook.com" target="_blank" rel="noreferrer"> </a>
                <a className="icon icon-twitter bi bi-twitter mr-2" href="https://www.twitter.com" target="_blank" rel="noreferrer"> </a>
                <a className="icon icon-instagram bi bi-instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer"> </a>
            </Col>
        </Row>
    );
};

export default RedesSociales;

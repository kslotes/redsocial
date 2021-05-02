import {Row, Col} from "react-bootstrap";
import './RedesSociales.css'
const RedesSociales = () => {
    return (
        <Row className="text-center">
            <Col>
                <i id="icon-facebook" href="https://www.facebook.com" target="_blank" className="bi bi-facebook mr-2"></i>
                <i id="icon-twitter" href="https://www.twitter.com" target="_blank" className="bi bi-twitter mr-2"></i>
                <i id="icon-instagram" href="https://www.instagram.com" target="_blank" className="bi bi-instagram"></i>
            </Col>
        </Row>
    );
};

export default RedesSociales;

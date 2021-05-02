import {Container, Row, Col, Button} from "react-bootstrap"
import NavBar from "../../Components/common/NavBar/NavBar"
import './TramitesPage.css'

const TramitesPage = () => {
      return (
            <Container fluid className="fondo">
                  <Row xs={1} className="text-center">
                        <h3 id="text-tramites">Trámites</h3>
                  </Row>
                  <Row className="text-center mt-5">
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                  </Row>
                  <Row className="text-center mt-4">
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                  </Row>
                  <Row className="text-center mt-4">
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                  </Row>
                  <Row className="text-center mt-4">
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                        <Col xs={6}>
                              <Button variant="dark" size="lg">Tramite</Button>
                        </Col>
                  </Row>
                  <NavBar/>
            </Container>
      )
}

export default TramitesPage;
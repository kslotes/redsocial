import {Container, Row} from "react-bootstrap"
import NavBar from "../../Components/common/NavBar/NavBar"
import ConjuntoTramites from "../../Components/TramitesPage/ConjuntoTramites"
import jsonNombres from "../../Components/TramitesPage/jsonNombres"
import './TramitesPage.css'

const TramitesPage = () => {

      return (    
            <Container fluid className="fondo">
                  <Row xs={1} className="text-center">
                        <h3 id="text-tramites">Trámites</h3>
                  </Row>
                  <ConjuntoTramites tramites={jsonNombres}/>
                  <NavBar/>
            </Container>
      )
}

export default TramitesPage;
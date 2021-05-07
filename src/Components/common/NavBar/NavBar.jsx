import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className="navbar" bg="dark" variant="dark" fixed="bottom">
            <Navbar.Brand to="#home"></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>
                    <NavLink to="/home">Novedades</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/tramites">Trámites</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="#configuracion">Configuración</NavLink>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;

import {Navbar, Nav} from "react-bootstrap"
const NavBar = () => {
    return (
        <Navbar className="navbar" bg="dark" variant="dark" fixed="bottom">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Novedades</Nav.Link>
                <Nav.Link href="/tramites">Trámites</Nav.Link>
                <Nav.Link href="#configuracion">Configuración</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;

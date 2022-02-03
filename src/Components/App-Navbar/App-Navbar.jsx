import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Carnet de notes</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

        <Nav.Link href="#action1" as={Link} to="/App" color="white">App</Nav.Link>
        <Nav.Link href="#action2" as={Link} to="/Acceuil">Acceuil</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>

        /</NavDropdown>
        <NavDropdown title="Favoris" id="navbarScrollingDropdown favoris">
          <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Js
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action2">Statistiques</Nav.Link>
        <Nav.Link href="#action3">Configuration</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="recherche"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Rechercher</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
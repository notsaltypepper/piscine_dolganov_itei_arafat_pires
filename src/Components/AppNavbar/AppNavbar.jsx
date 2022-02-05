import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function AppNavbar(props) {
  const setSearch = props.setSearch
 
  return (
    <div className='appnavbar'>

    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Do'Notes</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

        <Nav.Link href="#action1" as={Link} to="/App" color="white">Mes Carnets</Nav.Link>
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
          placeholder="rechercher une Note"
          className="me-2"
          
          value={props.search}
          onChange={(e )=> {
            setSearch(e.target.value)
          }}
        />
        <Button variant="outline-success">Rechercher</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
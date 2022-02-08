import { Navbar,Row, Container, Nav,NavDropdown,FormControl,Button,Form, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NotesPage from './../NotesPage/NotesPage';


export default function AppNavbar() {
   
  return (
    
    <Navbar bg="dark" expand="lg" variant='dark'>
  <Container fluid>
    <Navbar.Brand href="#">  <img src={require('./../../Images/logo.PNG')} height={50} width={50}/>       Do'Notes    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Nav.Link href="#action1" as={Link} to="/App" color="white">Mes Carnets</Nav.Link>
        <Nav.Link href="#action2" as={Link} to="/Acceuil">Acceuil</Nav.Link>
        <Nav.Link href="#action2"  as={Link} to="/Favoris" >Mes Favoris</Nav.Link>
       
  

        <NavDropdown title="" id="navbarScrollingDropdown favoris">
          <NavDropdown.Item href="#action3"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4"></NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action2">Statistiques</Nav.Link>
        <Nav.Link href="#action3">Configuration</Nav.Link>
      </Nav>
      
       
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
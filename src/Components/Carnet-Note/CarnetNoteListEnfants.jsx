import React from "react";
import { Link } from 'react-router-dom';
import NotesPage from '../NotesPage/NotesPage';

import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Card} from 'react-bootstrap';

//+ card.id

export default function CarnetNoteListEnfant({card,id}){
    return(
        <div className="carnetEnfant">
            <li>

            <Card className="carnet-item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="carnet-item">
                    <Card.Title>{card}</Card.Title>
                    <Card.Text>
                    Mon Premier Carnet
                    </Card.Text>
                    <Button as={Link} to={'/NotesPage/'+ id }className="visualiser" variant="primary">Visualiser le Carnet</Button>
                </Card.Body>
            </Card>
            
            </li>

        </div>

    )
}

import React from "react";
import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Card} from 'react-bootstrap';



export default function CarnetNoteListEnfant({card}){
    return(
        <div className="carnetEnfant">
            <ul>

            <Card className="carnet-item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="carnet-item">
                    <Card.Title>{card}</Card.Title>
                    <Card.Text>
                    Mon Premier Carnet
                    </Card.Text>
                    <Button className="visualiser" variant="primary">Visualiser le Carnet</Button>
                </Card.Body>
            </Card>
            </ul>

        </div>

    )
}

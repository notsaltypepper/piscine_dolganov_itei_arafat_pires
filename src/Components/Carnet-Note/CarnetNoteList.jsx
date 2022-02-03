import React from 'react';
import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Card} from 'react-bootstrap';
import CarnetNoteListEnfant from './CarnetNoteListEnfants'
export default function CarnetNoteList({carnets}){
    return(
        
        <div className="carnet-container">
           <ul className="carnet-list">
               {carnets.map(carnet =>(
                   <CarnetNoteListEnfant card={carnet.text} id={carnet.id} />
               ))}

            
           </ul>
            
        </div>
    )
}

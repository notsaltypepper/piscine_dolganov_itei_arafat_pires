import React from 'react';
import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Card} from 'react-bootstrap';
import CarnetNoteListEnfant from './CarnetNoteListEnfants'

//FONCTION QUI VA NOUS PERMETTRE DE PASSER DES INFO EN MODE PROPS 


//(pros: permet d utiliser un bout de code d un component a un autre 
//,(D ACCEDER AUX INFO D UN COMPOENENT))
export default function CarnetNoteList({carnets}){
    return(
        //JE PASSE 
        <div className="carnet-container">
           <ul className="carnet-list">
               {carnets.map((carnet) =>(
                   <CarnetNoteListEnfant key={carnet.id} card={carnet.text} id={carnet.id} />
               ))}

            
           </ul>
            
        </div>
    )
}

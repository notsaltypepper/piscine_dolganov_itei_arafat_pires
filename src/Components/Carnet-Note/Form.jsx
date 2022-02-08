import React from 'react';
import { Navbar, Container, Nav,NavDropdown,FormControl,Button,InputGroup} from 'react-bootstrap';
import App from './../../App';

//JE RECUPERER LES PROPS ICI 

export default function Form({setInputText,setCarnets,carnets,inputText}){
    //JE RECUPERE GRACE A UNE FONCTION ANONYME, L INFORMATION SAISIE DANS LE INPUT 
    const inputTextH = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    //JE STOCKE L INFRO DANS LA VARIABLE SUBMIT... ET L APL AU CLICK DU BTN 
    const submitCarnetH=(e)=>{
        e.preventDefault()
        setCarnets([...carnets,{text: inputText, id:Date.now()}])
        setInputText("")
    }
   
   // <App idcarnet={id}/>
    return( 
        <form>
             <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Ajouter un carnet"
                    value={inputText} type="text" variant="Danger" className="carnet-input" required onChange={inputTextH}
                   
                    />
                    <Button className="carnet-button" variant="outline-secondary" id="button-addon2" type="submit"  onClick={submitCarnetH}>
                    Button
                    </Button>
                </InputGroup>
           
            
            
        </form>

    )
}
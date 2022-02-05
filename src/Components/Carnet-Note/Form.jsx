import React from 'react';
import { Navbar, Container, Nav,NavDropdown,FormControl,Button} from 'react-bootstrap';
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
        setCarnets([...carnets,{text: inputText,completed:false, id:Date.now()}])

        setInputText("")
    }
    return( 
        <form>
            <input value={inputText} type="text" className="carnet-input" required onChange={inputTextH} />
            <button onClick={submitCarnetH} className="carnet-button" type="submit"></button>
            <i className="fas fa-plus-square"></i>
            <div className="select">
                <select name="carnets" className="filter-carnet">
                    <option value="all">Tout</option>
                    <option value="uncompleted">Incomplet</option>
                    <option value="completed">Complet</option>

                </select>
            </div>
        </form>

    )
}
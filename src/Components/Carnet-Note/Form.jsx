import React from 'react';
import { Navbar, Container, Nav,NavDropdown,FormControl,Button} from 'react-bootstrap';

export default function Form({setInputText,setCarnets,carnets,inputText}){
    const inputTextH = (e) =>{
        console.log()
        setInputText(e.target.value)
    }
    const submitCarnetH=(e)=>{
        e.preventDefault()
        setCarnets([...carnets,{text: inputText,completed:false}])

        setInputText('')
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
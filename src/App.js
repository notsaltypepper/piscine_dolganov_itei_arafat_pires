
import { useState } from 'react';
import CarnetNoteList from './Components/Carnet-Note/CarnetNoteList';
import Form from './Components/Carnet-Note/Form';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'

export default function App() {
  const [inputText, setInputText]=useState("");
  const [carnets, setCarnets]=useState([])
  return(
    <div>
        <header>Mes Carnets</header>
       <Form carnets={carnets} inputText={inputText} setCarnets={setCarnets} setInputText={setInputText}/>
        <CarnetNoteList carnets={carnets}  />
    </div>
  )
  
}

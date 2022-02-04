
import { useEffect, useState } from 'react';
import CarnetNoteList from './Components/Carnet-Note/CarnetNoteList';
import Form from './Components/Carnet-Note/Form';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'

export default function App() {
  const getLocalStorage =()=>{
    let carnets = localStorage.getItem("carnets")
    if(carnets){
      return(carnets=JSON.parse(localStorage.getItem("carnets")))

    }else{
      return[]
    }

  }
  const [inputText, setInputText]=useState("");
  const [carnets, setCarnets]=useState(getLocalStorage())
  useEffect(() =>{
    localStorage.setItem("carnets",JSON.stringify(carnets))
  },[carnets])
  
  return(
    <div>
        <header>Mes Carnets</header>
       <Form carnets={carnets} inputText={inputText} setCarnets={setCarnets} setInputText={setInputText}/>
        <CarnetNoteList carnets={carnets}  />
    </div>
  )
  
}

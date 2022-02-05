import { useEffect, useState } from 'react'

import CarnetNoteList from './Components/Carnet-Note/CarnetNoteList'
import Form from './Components/Carnet-Note/Form'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'
//CETTE FONCTION VA RETOUNER TOUTES LES INFORMATION DES CARNETS, on pourra donc Ajouter un carnet ou le Visualiser
export default function App() {
  //LOCALSTORAGE NOUS PERMET DE STOCKER LES INFORMATIONS DANS Notre stockage-interne (locale)
  //GRACE A CELA , LES INFORMATION(CARNET ) SONT TJR PRESENT LORSQUE L ON RAFRAICHIT LA PAGE

  const getLocalStorage = () => {
    let carnets = localStorage.getItem('carnets')
    if (carnets) {
      return (carnets = JSON.parse(localStorage.getItem('carnets')))
    } else {
      return []
    }
  }

  const [inputText, setInputText] = useState('')
  const [carnets, setCarnets] = useState(getLocalStorage())

  //J UTILISE LE USEEFFECT , QUI ME PERMETTRA DE REAGIR AU STATE et le la fonction localstorage qui est passee en param
  useEffect(() => {
    localStorage.setItem('carnets', JSON.stringify(carnets))
  }, [carnets])
//JE PASSE ENCORE UNE FOIS EN MODE (PROPS) LES DIFFERENT STATES QUI ETE DECLARE ICI AU COMPONENTS CONSERNER AFIN DE LES UTILISER LA BAS ...
  return (
    <div>
      <header>Mes Carnets</header>
      
      <Form
        carnets={carnets}
        inputText={inputText}
        setCarnets={setCarnets}
        setInputText={setInputText}
      />
      <CarnetNoteList carnets={carnets} />
    </div>
  )
}

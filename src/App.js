import { useEffect, useState } from 'react'

import CarnetNoteList from './Components/Carnet-Note/CarnetNoteList'
import Form from './Components/Carnet-Note/Form'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'
import AppNavbar from './Components/App-Navbar/App-Navbar'
import Favoris from './Components/Carnet-Note/Favoris'


//CETTE FONCTION VA RETOUNER TOUTES LES INFORMATION DES CARNETS, on pourra donc Ajouter un carnet ou le Visualiser

export default function App({id}) {

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
    <Container>
      <Row>
          <Col>
            <h1>Mes Carnets</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <div className='mb-4'></div>
         <Form
        
          carnets={carnets}
          inputText={inputText}
          setCarnets={setCarnets}
          setInputText={setInputText}
        />
            <div className='mb-9'>

        <CarnetNoteList carnets={carnets} id_carnet={id} />
            </div>
     
         
          </Col>
        </Row>
    </Container>
  
    
      
  
  )
}
//<Favoris carnets={carnets} />
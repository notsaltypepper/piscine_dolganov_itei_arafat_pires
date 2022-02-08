import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CarnetFavProvider } from './../Provider/carnetsProvider'
import {CarnetNoteListEnfants} from './CarnetNoteListEnfants'
import { Navbar, Nav,NavDropdown,FormControl,Card} from 'react-bootstrap';
import App from './../../App'

export default function Favoris({card,id,key,carnets}){
     const [carnetFav, setCarnetFav] = useState([])
     const [carnetFavModif, setCarnetFavModif] = useState([])
     const carnetFavsProvider = new CarnetFavProvider()
     
     useEffect(() => {
       let datas = carnetFavsProvider.getcarnetFav()
       
       setCarnetFav(datas)
       
      }, [])
      
      function remove(carnetFav) {
        let rep = window.confirm(
          `Etes-vous sur de vouloir supprimer le carnet?  ${carnetFav.card}`
          )
          if (rep) {
            carnetFavsProvider.remove(carnetFav)
            let datas = carnetFavsProvider.getcarnetFav()
            setCarnetFav(datas)
          }
        }
        
        
        <App idcarnet={id}/>

  let displayFav = carnetFav.map((carnet, indice) => {
    return (
      <tr key={'notes-' + carnet.id}>
        
        {indice + 1}<Card className="carnet-item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="carnet-item">
                    <Card.Title value={carnet.text}>{carnet.card}</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button as={Link} to={'/NotesPage/:id'+ id }className="visualiser" variant="primary">Visualiser le Carnet</Button>
                    <Button md= {12} variant="danger" onClick={() => remove(carnet)}>
                      Supprimer des Favoris
                    </Button>
                </Card.Body>
            </Card>
       
      </tr>
    )
  })
  

   

    return(
      <div>

          <Container>
            <Row>
              <Col md={9}>
                <div className='mb-12'></div>
            

                <h1>Liste des Favoris</h1><hr />
                
                
                <Button variant="primary" size="lg" active as={Link} to="/App">
                Retour
                </Button>
            
              </Col>
            </Row>
          

              {displayFav}
          </Container>
         
       </div>
            



        
    )
  
}

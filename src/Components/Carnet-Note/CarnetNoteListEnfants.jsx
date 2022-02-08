import React from "react";
import { Link,useNavigate} from 'react-router-dom';
import NotesPage from '../NotesPage/NotesPage';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { useState,useEffect } from "react";

import { Navbar, Container, Nav,NavDropdown,FormControl,Button,Card} from 'react-bootstrap';
import AppNavbar from "../App-Navbar/App-Navbar";
import Favoris from './Favoris'
import { CarnetFavProvider } from './../Provider/carnetsProvider'

// JE RECUPERE LES PROPS , ILS SONT MTN EN PARAM DANS MA FONCTION , 
//JE PEUX MTN LES UTILISER , LA OU' JE VEUX 

export default function CarnetNoteListEnfant({card,id}){

    const [fav, setFav] = React.useState(false);
    const [carnets, setCarnets] = useState({
      id:'',
      card:card,
    })

    const carnetsProvider = new CarnetFavProvider()
    const navigate = useNavigate()

  function add(e) {
      e.preventDefault()
      let rep = window.confirm(
    `Etes-vous sur de vouloir ajouter ce carnet aux favoris?`
    )
    carnetsProvider.add(carnets)
    navigate('/App')
  }
   


    
    
    return(
        <div className="container">
          <div className="flex">

            <li>

            <Card className="carnet-item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./../../Images/IMG3.jpg')} />
                <Card.Body className="carnet-item">
                    <Card.Title value={carnets.text}>{card}</Card.Title>
                    <Card.Text>
                    Mon Premier Carnet
                    </Card.Text>
                    <Button as={Link} to={'/NotesPage/'+ id }className="visualiser" variant="primary">Visualiser le Carnet</Button>
                    <IconButton  style={{ color: "red", cursor: "pointer" }} onClick={e => add(e)} as={Link} to='/Favoris' aria-label="delete" color="primary">
                        <FavoriteBorderIcon ></FavoriteBorderIcon>
                    </IconButton>
                </Card.Body>
            </Card>
            
            </li>
          </div>
      
        </div>

)
}
//<Favoris setFav={setFav} />
 //<Button onClick={Fav()} variant="outline-danger">Favoris</Button><IconButton ></IconButton>
 /*{fav && 
            <IconButton onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">
            <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
            }
            {!fav &&
            <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
            <Favorite></Favorite>
            </IconButton>
        } */

        /*useEffect(() => {
    let datas = carnetsProvider.getcarnets()
    
    setCarnets(datas)
      
  }, [])

  function remove(carnet) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer ce Carnet de la liste des favoris?`
    )
    if (rep) {
      carnetsProvider.remove(carnet)
      let datas = carnetsProvider.getcarnets()
      setCarnets(datas)
    }
  } */
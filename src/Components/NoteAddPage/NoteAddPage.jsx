import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Select,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { NotesProvider } from './../Provider/notesProvider'
import CarnetNoteList from '../Carnet-Note/CarnetNoteList'
import Formulaire from '../Carnet-Note/Formulaire'
import { Converter, converter } from 'showdown'
import showdown from 'showdown'

// DE BASE MON TABLEAU EST VIDE ET DONC MES STATES AUSSI ...
export default function NoteAddPage() {
  const [noteAdd, setNoteAdd] = useState({
    id: '',
    titre: '',
    description: '',
  })
  let [test, setTest] = useState('')
  const converter = new showdown.Converter()
  //ICI LA CLASSE PROVIDER VA NOUS PERMETTRE DE POUVOIR ADD, UPDATE, OU DELETE DES ELEMENT(CAR TTE C FONCTIONS LA SONT DEJA DECLARER
  // ..DANS LE PROVIDER... IL RESTE PLUS QU QU A LES UTILISER ICI)
  const notesProvider = new NotesProvider()
  const navigate = useNavigate()

  function add(e) {
    e.preventDefault()
    notesProvider.add(noteAdd)
    navigate('/App')
  }
  function ShowdownWeb() {
    test = converter.makeHtml(noteAdd.titre)
  }
  //DONT FORGET QUE LE SetState PERMET DE CHANGER L ETAT D UN STATE
  return (
    <div>
      <header>Veuillez Saisir Vos Notes...</header>

      <br />
      <Form onSubmit={e => add(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Note-Titre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter le Titre"
            value={noteAdd.titre}
            onChange={e => {
              let tmp = { ...noteAdd }
              tmp.titre = e.target.value
              setNoteAdd(tmp)
            }}
            required
          />
          <select name="carnets" className="filter-note-categ">
            <option value="all">Cuisine</option>
            <option value="uncompleted">Education</option>
            <option value="completed">Sport</option>
          </select>
        </Form.Group>
        <br />

        <Form.Group
          className="mb-6"
          controlId="exampleForm.ControlTextarea1"
          id="titre-input"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={noteAdd.description}
            onChange={e => {
              let tmp = { ...noteAdd }
              tmp.description = e.target.value
              setNoteAdd(tmp)
            }}
            required
            rows={2}
            placeholder="description"
          />
          <div>
            <h4 id="titre-input">{converter.makeHtml(noteAdd.titre)}</h4>
          </div>
          <Button variant="light" onClick={ShowdownWeb()}>
            Mode-Web
          </Button>
        </Form.Group>
        <Button variant="dark" type="submit">
          Ajouter
        </Button>
        <Button variant="secondary" type="reset">
          Annuler
        </Button>
      </Form>
      <Button variant="primary" size="lg" active as={Link} to="/App">
        Retour
      </Button>
    </div>
  )
}

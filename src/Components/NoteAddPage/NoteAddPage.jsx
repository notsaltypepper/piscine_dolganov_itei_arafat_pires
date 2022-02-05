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
export default function NoteAddPage() {
  const [noteAdd, setNoteAdd] = useState({
    id: '',
    titre: '',
    description: '',
  })

  const notesProvider = new NotesProvider()
  const navigate = useNavigate()

  function add(e) {
    e.preventDefault()
    notesProvider.add(noteAdd)
    navigate('/App')
  }

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

        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
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
          <Button variant="light">Mode-Web</Button>
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

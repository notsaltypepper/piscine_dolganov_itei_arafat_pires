import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NotesProvider } from './../Provider/notesProvider'

export default function ModificationPage(){
     const [note, setNote] = useState({})
      const [noteModif, setNoteModif] = useState({
    id: '',
    titre: '',
    description: '',
   
  })
  const notesProvider = new NotesProvider()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let tmpNote = notesProvider.getNoteById(id)

    if (!tmpNote) {
      alert('Notes non trouvé dans la base')
      navigate('/notes')
    } else {
      setNote(tmpNote)
      setNoteModif(tmpNote)
    }
  }, [id, navigate])

  function Modif(e) {
    e.preventDefault()
    let res = notesProvider.update(noteModif)
    if (res) navigate('/NotesPage')
    else alert("Erreur lors de l'enregistrement")
  }

  function reset() {
    setNoteModif(note)
  }
    return(
       <div>
            <header>Veuillez Saisir Vos Notes...</header><br />
            <Form onSubmit={e => Modif(e)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Note-Titre</Form.Label>
                        <Form.Control
                                type="text"
                                placeholder="Enter le Titre"
                                value={noteModif.titre}
                                onChange={e => {
                                    let tmp = { ...noteModif }
                                    tmp.titre = e.target.value
                                    setNoteModif(tmp)
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
                        <Form.Control as="textarea" value={noteModif.description}
                                onChange={e => {
                                    let tmp = { ...noteModif }
                                    tmp.description = e.target.value
                                    setNoteModif(tmp)
                                }}
                                required 
                                rows={2} placeholder="description"/>
                        <Button variant="light">Mode-Web</Button>
                 </Form.Group>
                  <Button variant="dark" type="submit" as={Link} to={'/PreviNote/' + note.id}>Sauvegarder</Button>
                  <Button variant="secondary"  type="reset" onClick={reset}>Annuler</Button>
            </Form>
            <Button variant="primary" size="lg" active as={Link} to="/App">
        Retour
    </Button>
      </div>




        
    )
  
}

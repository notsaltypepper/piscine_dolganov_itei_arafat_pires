import { Link, useNavigate } from 'react-router-dom';
import { Button,Form,FormControl,FormLabel,FormGroup,Select,Col,Container,Table,Row} from 'react-bootstrap';
import { useState,useEffect} from 'react';
import { NotesProvider } from './../Provider/notesProvider';

export default function NotesPage(){
  const [notes, setNotes] = useState([])
  const notesProvider = new NotesProvider()

  useEffect(() => {
    let datas = notesProvider.getNotes()
    setNotes(datas)
  }, [])

  function remove(note) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le note ${note.titre} ${note.description}`
    )
    if (rep) {
      notesProvider.remove(note)
      let datas = notesProvider.getNotes()
      setNotes(datas)
    }
  }

  let displaynotes = notes.map((note, indice) => {
    return (
      <tr key={'notes-' + note.id}>
        <td>{indice + 1}</td>
        <td>{note.titre}</td>
        <td>{note.description}</td>
        
        <td>
          <Button as={Link} to={'/ModificationPage/' + note.id} variant="warning">
            Modifier
          </Button>
        </td>
        <td>
          <Button variant="danger" onClick={() => remove(note)}>
            Supprimer
          </Button>
        </td>
      </tr>
    )
  })
  return (
   
    <>
      
      <Container>
        <Row>
          <Col>
            <h1>Gestion des notes</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="mb-3">
              <Button as={Link} to="/NoteAddPage">
                Ajouter un note
              </Button>
            </div>

            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Titre</th>
                  <th>Description</th>
                 
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>{displaynotes}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

import { Link, useNavigate } from 'react-router-dom';
import { Button,ListGroup,Form,FormControl,FormLabel,FormGroup,Select,Col,Container,Table,Row} from 'react-bootstrap';
import { useState,useEffect} from 'react';
import { NotesProvider } from './../Provider/notesProvider';
import showdown from "showdown";

export default function NotesPage(){
  const [notes, setNotes] = useState([])
  const [notesFilter,setNotesFilter]=useState([])
   const [search, setSearch] = useState('')
  //const not={notes.filter((note)=>{return note.text.toLowerCase().includes(search)})}
  
  const converter = new showdown.Converter();
    let Desc = converter.makeHtml(notes.description);
  
  const notesProvider = new NotesProvider()
  //ICI aussi LA CLASSE PROVIDER VA NOUS PERMETTRE DE POUVOIR ADD, UPDATE, OU DELETE DES ELEMENT(CAR TTE C FONCTIONS LA SONT DEJA DECLARER 
  // ..DANS LE PROVIDER... IL RESTE PLUS QU QU A LES UTILISER ICI)
  
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
          <Col md={6}> <input type="text" placeholder="rechercher une note grace au Titre/Description..."
           className='form-control' onChange={(e) => { setSearch(e.target.value)}} /></Col>
          
          <Col md={12}>
            <div className="mb-4">
              
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
              
              <tbody>{notes.filter(val =>{
                if(search === ""){

                  return val
                }else if(
                  val.titre.toLowerCase().includes(search.toLowerCase()) ||
                  val.description.toLowerCase().includes(search.toLowerCase())
                  
                   
                ){
                  return val
                }
                
              }).map((note, indice) => (
                
                
                <tr  key={'notes-' + note.id }>
                    <td>{indice + 1}</td>
                    <td>{note.titre}</td>
                    <td id="output-notespage" dangerouslySetInnerHTML={{ __html: converter.makeHtml(note.description) }}></td>
                    
                    <td>
                      
                    
                  
                  <Button as={Link} to={'/PreviNote/' + note.id} variant="success">
                    Observer
                      
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => remove(note)}>
                    Supprimer
                  </Button>
                  
                </td>
                  </tr>))}
          </tbody>
                
            </Table>
          </Col>
        </Row>
      </Container>
    </>

  )
}
//{displaynotes}
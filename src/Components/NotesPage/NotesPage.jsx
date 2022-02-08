import { Link, useNavigate } from 'react-router-dom';
import { Button,ListGroup,Form,FormControl,FormLabel,FormGroup,Select,Col,Container,Table,Row} from 'react-bootstrap';
import { useState,useEffect} from 'react';
import { NotesProvider } from './../Provider/notesProvider';

export default function NotesPage(props){
  const [notes, setNotes] = useState([])
  const [notesFilter,setNotesFilter]=useState([])
   const [search, setSearch] = useState('')
  //const not={notes.filter((note)=>{return note.text.toLowerCase().includes(search)})}
  
  

  
  //ICI aussi LA CLASSE PROVIDER VA NOUS PERMETTRE DE POUVOIR ADD, UPDATE, OU DELETE DES ELEMENT(CAR TTE C FONCTIONS LA SONT DEJA DECLARER 
// ..DANS LE PROVIDER... IL RESTE PLUS QU QU A LES UTILISER ICI)
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
 
  
 /* {[notes]. filter((note)=>{
   if(search == ""){
     return note
   }else if ( note.titre.toLowerCase().includes(search.toLowerCase())){
     return note
   }
 }).map((note,key) =>{
   return (
     <tr key={'notes-' + note.id}>
            <td>{indice + 1}</td>
            <td>{note.titre}</td>
            <td>{note.description}</td>
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
          </tr>
    
   


   )
 })
 
 
 
 note.includes(search)).map(notesFilter=>( 
    <li>{notesFilter}</li>
  ))}*/
  
  /*<div>
    {[notes].filter((notes)=>{if (search == ""){return notes
    } else if(notes.titre.toLowerCase().includes(search.toLowerCase())){return notes}
    }).map((notes,key)=>(
      return(
        <div key={key}></div>
        
        <li> {notes.titre}</li>

      )
    ))}
  </div>*/
  
  
  /*let displaynotes = notes.map((note, indice) => {
    return (
    
         <tr key={'notes-' + note.id}>
            <td>{indice + 1}</td>
            <td>{note.titre}</td>
            <td>{note.description}</td>
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
          </tr>
    
   

    )
  })*/
     /* <tr key={'notes-' + note.id}>
        <td>{indice + 1}</td>
        <td>{note.titre}</td>
        <td>{note.description}</td>
        
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
      </tr>*/
     /* useEffect(() => {
        setNotesFilter(notes)
        if ([search].length > 0) {
          let lowerSearch=search.toLowerCase()
          console.log(search)
       let res = notes.filter((item) => {
         let lowerItem = item.toLowerCase && item.toLowerCase()
         if (lowerItem.indexOf(lowerSearch) > -1) return item
         return null
       })
       setNotesFilter(res)
     }
   }, [search, notes])*/
  
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

    
                <tr key={'notes-' + note.id}>
                    <td>{indice + 1}</td>
                    <td>{note.titre}</td>
                    <td>{note.description}</td>
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
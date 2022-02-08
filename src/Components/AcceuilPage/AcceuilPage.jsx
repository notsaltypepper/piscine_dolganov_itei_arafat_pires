import { Link } from 'react-router-dom'
import CarnetNoteList from './../Carnet-Note/CarnetNoteList'
import App from '../../App'
import NotesPage from '../NotesPage/NotesPage'
import { Accordion, Button,Container,Badge, ListGroup } from 'react-bootstrap'
export default function AcceuilPage({carnet_counter, notes_counter}) {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>- Total carnets de notes: {carnet_counter}</ListGroup.Item>
        <ListGroup.Item>- Total notes: {notes_counter}</ListGroup.Item>
      </ListGroup>
    </Container>

    
  )
}

import { Link } from 'react-router-dom'
import CarnetNoteList from './../Carnet-Note/CarnetNoteList'
// import { carnets } from 'src/App.js'
import { Accordion, Button } from 'react-bootstrap'

export default function AcceuilPage() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Statistiques</Accordion.Header>
        <Accordion.Body>
          - Total carnets de notes: <br></br>- Total notes: <br></br>- Notes par
          catégories:
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Carnets de notes</Accordion.Header>
        <Accordion.Body>
          {/* <CarnetNoteList carnets={carnets} /> */}
          <Button variant="primary" as={Link} to={'/App/'}>
            Voir tous les carnets
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

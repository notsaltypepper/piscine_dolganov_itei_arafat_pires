import { Link } from 'react-router-dom'
import CarnetNoteList from './../Carnet-Note/CarnetNoteList'
// import { carnets } from 'src/App.js'
import { Accordion, Button,Container,Badge } from 'react-bootstrap'

export default function AcceuilPage() {
  return (
    <Container>
      <Accordion defaultActiveKey="0 " bg="dark" variant="dark">
          <Accordion.Item eventKey="0">
              <Accordion.Body >
                  <Accordion.Header>Statistiques</Accordion.Header>
                        - Total carnets de notes: <Badge pill bg="dark">
                          Dark
                            </Badge><br></br>- Total notes:<Badge pill bg="warning">
                                    Dark
                            </Badge> <br></br>- Notes par
                                catégories:<Badge pill bg="success">
                                    Dark
                            </Badge>
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
    </Container>

    
  )
}

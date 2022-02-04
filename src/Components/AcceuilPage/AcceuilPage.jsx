import { Link } from 'react-router-dom'
import {
  Accordion,
  Tab,
  Tabs,
  Card,
  Placeholder,
  Button,
} from 'react-bootstrap'

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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

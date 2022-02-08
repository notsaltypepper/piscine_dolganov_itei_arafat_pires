import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Select,
  Col,
  Container,
  Table,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { NotesProvider } from "./../Provider/notesProvider";

export default function PreviNote() {
  const [notes, setNotes] = useState([]);
  const notesProvider = new NotesProvider();

  useEffect(() => {
    let datas = notesProvider.getNotes();
    setNotes(datas);
  }, []);

  function remove(note) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le note ${note.titre} ${note.description}`
    );
    if (rep) {
      notesProvider.remove(note);
      let datas = notesProvider.getNotes();
      setNotes(datas);
    }
  }

  let displaynotes = notes.map((note, indice) => {
    return (
      <tr key={"notes-" + note.id}>
        <td>{note.description}</td>
        <td>
          <Button
            as={Link}
            to={"/ModificationPage/" + note.id}
            variant="warning"
          >
            Modifier
          </Button>
        </td>
        <div className="md-12">
          <Button as={Link} to={"/NotesPage/" + note.id}>
            Retour
          </Button>
        </div>
      </tr>
    );
  });
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
            <div className="mb-3"></div>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>{displaynotes}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

/* <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control type="text" placeholder="Titre" />
                    </Form.Group>
                   
                </Form>
                <Form>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                </Form>*/

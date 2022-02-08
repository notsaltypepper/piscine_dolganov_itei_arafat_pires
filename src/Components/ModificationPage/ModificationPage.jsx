import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import showdown from "showdown";
import { NotesProvider } from "./../Provider/notesProvider";

export default function ModificationPage() {
  const [note, setNote] = useState({});
  const [noteModif, setNoteModif] = useState({
    id: "",
    titre: "",
    description: "",
  });
  const notesProvider = new NotesProvider();
  const { id } = useParams();
  const navigate = useNavigate();
  const converter = new showdown.Converter();
  var Desc = converter.makeHtml(noteModif.description);
  useEffect(() => {
    let tmpNote = notesProvider.getNoteById(id);

    if (!tmpNote) {
      alert("Notes non trouvé dans la base");
      navigate("/notes");
    } else {
      setNote(tmpNote);
      setNoteModif(tmpNote);
    }
  }, [id, navigate]);

  function update(e) {
    e.preventDefault();
    let res = notesProvider.update(noteModif);
    if (res) navigate("/PreviNote/:id");
    else alert("Erreur lors de l'enregistrement");
  }

  function reset() {
    setNoteModif(note);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Modifier une Note...</h1>
            <Button
              variant="primary"
              size="lg"
              active
              as={Link}
              to="/PreviNote/:id"
            >
              Retour
            </Button>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form onSubmit={(e) => update(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Note-Titre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter le Titre"
                  value={noteModif.titre}
                  onChange={(e) => {
                    let tmp = { ...noteModif };
                    tmp.titre = e.target.value;
                    setNoteModif(tmp);
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

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={noteModif.description}
                  onChange={(e) => {
                    let tmp = { ...noteModif };
                    tmp.description = e.target.value;
                    setNoteModif(tmp);
                  }}
                  required
                  rows={2}
                  placeholder="description"
                />
                <Button variant="light">Mode-Web</Button>
              </Form.Group>
            </Form>
            <Form>
              <div>
                <p></p>
                <Card className="carnet-item" style={{ width: "18rem" }}>
                  <Card.Title>{noteModif.titre}</Card.Title>
                  <Card.Body className="carnet-item">
                    <Card.Text>
                      <p
                        id="note-output"
                        dangerouslySetInnerHTML={{
                          __html: Desc,
                        }}
                      ></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Form>
            <Button
              variant="dark"
              type="submit"
              as={Link}
              to={"/PreviNote/:id" + note.id}
            >
              Sauvegarder
            </Button>
            <Button variant="secondary" type="reset" onClick={reset}>
              Annuler
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

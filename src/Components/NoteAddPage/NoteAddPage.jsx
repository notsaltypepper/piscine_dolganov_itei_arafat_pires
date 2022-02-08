import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Select,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { NotesProvider } from "./../Provider/notesProvider";
import { Converter, converter } from "showdown";
import showdown from "showdown";
import { NoteAdd } from "@material-ui/icons";
// DE BASE MON TABLEAU EST VIDE ET DONC MES STATES AUSSI ...
export default function NoteAddPage({ id }) {
  const [noteAdd, setNoteAdd] = useState({
    id: "",
    titre: "",
    description: "",
  });
  let [test, setTest] = useState("");
  const converter = new showdown.Converter();
  //ICI LA CLASSE PROVIDER VA NOUS PERMETTRE DE POUVOIR ADD, UPDATE, OU DELETE DES ELEMENT(CAR TTE C FONCTIONS LA SONT DEJA DECLARER
  // ..DANS LE PROVIDER... IL RESTE PLUS QU QU A LES UTILISER ICI)
  const notesProvider = new NotesProvider();
  const navigate = useNavigate();
  var Desc = converter.makeHtml(noteAdd.description);
  function add(e) {
    e.preventDefault();
    notesProvider.add(noteAdd);
    navigate("/App");
  }

  function ShowdownWeb() {
    test = converter.makeHtml(noteAdd.description);
  }
  <NoteAddPage DescNote={Desc} />;

  //DONT FORGET QUE LE SetState PERMET DE CHANGER L ETAT D UN STATE
  return (
    <div>
      <header>Veuillez Saisir Vos Notes...</header>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Form onSubmit={(e) => add(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <strong>Titre</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Titre"
            value={noteAdd.titre}
            onChange={(e) => {
              let tmp = { ...noteAdd };
              tmp.titre = e.target.value;
              setNoteAdd(tmp);
            }}
            required
          />
        </Form.Group>
        <br />

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          id="titre-input"
        >
          <Form.Label>
            <strong>Description</strong>
          </Form.Label>

          <Form.Control
            as="textarea"
            value={noteAdd.description}
            onChange={(e) => {
              let tmp = { ...noteAdd };
              tmp.description = e.target.value;
              setNoteAdd(tmp);
            }}
            required
            placeholder="Description"
          />
        </Form.Group>
      </Form>
      <Form>
        <div>
          <p></p>
          <Card className="carnet-item" style={{ width: "18rem" }}>
            <Card.Title>{noteAdd.titre}</Card.Title>
            <Card.Body className="carnet-item">
              <Card.Text>
                <p
                  id="note-output"
                  dangerouslySetInnerHTML={{ __html: Desc }}
                ></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Form>
      <Form onSubmit={(e) => add(e)}>
        <Button variant="dark" type="submit">
          Ajouter
        </Button>
        <Button variant="secondary" type="reset">
          Annuler
        </Button>
        <Button variant="primary" active as={Link} to="/App">
          Retour
        </Button>
      </Form>
    </div>
  );
}

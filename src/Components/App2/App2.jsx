import AppNavbar from '../AppNavbar/AppNavbar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NotesPage from './../NotesPage/NotesPage';
import { useState } from 'react'
import Search from '../../Search';

function App2() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')


  return (
    <div className="container">
        <Search  handelSearchNote={setSearch}/>
      <header className="mb-5">
        <AppNavbar setSearch={setSearch}></AppNavbar>
      </header>
        <NotesPage notes={notes.filter((note)=>note.text.toLowerCase().includes(search))} setNotes={setNotes} />
      <main>
        <Container>
          <Row className="mb-4">

          </Row>

          
        </Container>
      </main>
    </div>
  )
}
export default App2

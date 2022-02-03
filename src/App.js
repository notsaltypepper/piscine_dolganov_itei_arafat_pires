
import { useState } from 'react'
import Counter from './Components/counter/Counter'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'

export default function App() {
  const [inputToDo, setInpuToDo] = useState('')
  const [todos, setToDos] = useState([])

  let displayToDos = todos.map(function (todo, indice) {
    return <li key={'todo-' + indice}>{todo}</li>
  })

  function add() {
    let todo = inputToDo
    if (inputToDo.trim().length === 0) return null

    let tmp = [...todos]
    tmp.push(inputToDo)
    setToDos(tmp)
    setInpuToDo('')
    return null
  }

  function deleteAll() {
    setToDos([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Todo List v2</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <input
        type="text"
        size={30}
        placeholder="Saisir une tache"
        value={inputToDo}
        onChange={event => setInpuToDo(event.target.value)}
      />
      <Button variant="success" onClick={add}>
        Ajouter
      </Button>{' '}
      <Button variant="danger" onClick={deleteAll}>
        Tout effacer
      </Button>{' '}
      <Counter />
    </div>
  )
}

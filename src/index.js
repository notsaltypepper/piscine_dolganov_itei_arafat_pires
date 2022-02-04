import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AppNavbar from './Components/App-Navbar/App-Navbar'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AcceuilPage from './Components/AcceuilPage/AcceuilPage'
import NoteAddPage from './Components/NoteAddPage/NoteAddPage'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        <Routes>
          <Route path="/Acceuil" element={<AcceuilPage />} />
          <Route path="/App" element={<App />} />
          <Route path="/NoteAddPage" element={<NoteAddPage />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppNavbar from './Components/App-Navbar/App-Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AcceuilPage from './Components/AcceuilPage/AcceuilPage';

import NoteAddPage from './Components/NoteAddPage/NoteAddPage';
import NotesPage from './Components/NotesPage/NotesPage';
import ModificationPage from './Components/ModificationPage/ModificationPage';

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
          <Route path="/NotesPage" element={<NotesPage />} />
          <Route path="/ModificationPage/:id" element={<ModificationPage />} />
          
          
          
          
     
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
  );
 


reportWebVitals()

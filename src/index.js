import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppNavbar from './Components/App-Navbar/App-Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <main>
    
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        
         
       
      
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals()

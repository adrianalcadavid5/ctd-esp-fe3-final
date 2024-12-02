import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from "./Context/Context"
import { ThemeProvider } from './Context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);



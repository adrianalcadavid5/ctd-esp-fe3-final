import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from "./Context/Context"
import { ThemeProvider } from './Context/ThemeContext';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ThemeProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);



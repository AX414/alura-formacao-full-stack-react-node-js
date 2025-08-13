import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Favoritos from './routes/Favoritos';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"


const GlobalStyle = createGlobalStyle`
    body {
    margin: -1%;
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(90deg, #002F52 0%, #003a60 30%, #274e70 70%, #326589 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden; /* evita rolagem horizontal */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    li {
      list-style: none;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();

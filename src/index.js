import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Relatorio from './relatorio';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/cadastro_html" element={<Relatorio />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
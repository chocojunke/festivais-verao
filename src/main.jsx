import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Map from './map';
import Festival from './festival';

import './main.css'; // Import the CSS file

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Map/>}></Route>
        <Route path='/festival/:festivalId' exact element={<Festival/>}></Route>
      </Routes>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

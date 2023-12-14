import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import House from './Pages/House/House';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/house/:id' element={ <House />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
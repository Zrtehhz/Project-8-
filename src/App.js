import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/about/about';
import Error from './pages/error/error';
import House from './pages/house/house';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/house/id' element={ <House />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/404" element={<Error />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
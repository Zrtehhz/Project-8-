import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Error from './components/error';

function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
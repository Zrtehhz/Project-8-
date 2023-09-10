import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Logo from './Assets/LOGO.svg';
import background_top from './Assets/background_top.png';



function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
      <img className='img_navbar' src={Logo} />
      <div className='right_section'>
        <ul><li><a href="#" className='navbar_link'>Accueil</a></li></ul>
        <ul><li><a href="#" className='navbar_link'>A Propos</a></li></ul>
      </div>
      </nav>
      </header>
      <body>
        <section className='top_body_section'>
          <div class='top_body_div'>
            <img className='img_body' src={background_top} />
          </div>
        </section>

      </body>
      <footer>

      </footer>
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Logo from './Assets/LOGO.svg';
import background_top from './Assets/background_top.png';
import Erreur from './components/Erreur.js';
import Background from './Assets/cote_rocheuse.svg';
const imageUrl = null;



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
            <span className='span_top_body'>Chez vous, partout et ailleurs</span>
            <img className='img_body overlay' src={Background} />
          </div>
        </section>
        <section className="first_section">
        <div className='first_div main'>
          <card className='first_card'>
            <span className='first_span'>Titre de la location</span>
          </card>
        </div>  
        <div className='second_div main'>
          <card className='second_card'>
            <span className='second_span'>Titre de la location</span>
          </card>
        </div> 
        <div className='three_div main'>
          <card className='three_card'>
            <span className='three_span'>Titre de la location</span>
          </card>
        </div> 
        <div className='four_div main'>
          <card className='four_card'>
            <span className='four_span'>Titre de la location</span>
          </card>
        </div> 
        <div className='five_div main'>
          <card className='five_card'>
            <span className='five_span'>Titre de la location</span>
          </card>
        </div> 
        <div className='six_div main'>
          <card className='six_card'>
            <span className='six_span'>Titre de la location</span>
          </card>
        </div>
       </section> 
      </body>
      <footer>
        <section className='first_section_footer'>
        <img className='img_footer' src={imageUrl} />
        </section> 
      </footer>
    </div>


    </Router>
  );
}

export default App;

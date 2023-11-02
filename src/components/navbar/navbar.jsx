import '../navbar/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    return (

      <nav>
      <Link to="/" className="Accueil">
        Accueil
      </Link>

      <Link to="/about" className="APropos">
        A Propos
      </Link>
    </nav>
    );
}

  export default Navbar;
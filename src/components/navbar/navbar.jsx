import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar({id, title, cover}) {
    return (
        <Link to={`/house/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
    );
}

  export default Navbar;
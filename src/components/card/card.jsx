import './card.css'
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {
    return (
      <div className='container'>
        <Link to={`/house/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
    </div>

    );
}

  export default Card;
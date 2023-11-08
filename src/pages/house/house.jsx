import './house.css';
import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
  

function House() {
    return (

		<>	

<main className="fiche-logement">
  <div className="carrousel-logement">
    <Carousel pictures={logement.pictures} />
  </div>

  <h1>{logement?.title}</h1>
  <p>{logement.location}</p>
  

  <div className="fiche-owner">
    <p>{logement.host.name}</p>
    <img src={logement.host.picture} alt="Host" />
  </div>



  <Collapse title="Description" description={logement.description} />
</main>


		</>
    );
  }

  export default House;
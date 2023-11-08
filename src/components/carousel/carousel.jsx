import './carousel.css';

function Carousel({ logement }) {
    return (
        <main className="fiche-logement">
            <div className="carrousel-logement">
                <Carousel pictures={logement.pictures} />
            </div>
        </main>
    );
}

export default Carousel;

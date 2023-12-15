import React, { useState } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ logement }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Fonction pour afficher l'image suivante dans le tableau de photos du logement
const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
        // Vérifie si l'index actuel est le dernier dans le tableau, revient au début si vrai, sinon passe à l'index suivant
        prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
};

// Fonction pour afficher l'image précédente dans le tableau de photos du logement
const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
        // Vérifie si l'index actuel est le premier dans le tableau, revient à la fin si vrai, sinon passe à l'index précédent
        prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
};


    return (
        <main className="fiche-logement">
            <div className="carrousel-logement">
                <img src={logement.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <div className="image-counter">
                    {`${currentImageIndex + 1}/${logement.pictures.length}`}
                </div>
                <button className="carousel-chevron prev-button" onClick={prevImage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="carousel-chevron next-button" onClick={nextImage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </main>
    );
}

export default Carousel;

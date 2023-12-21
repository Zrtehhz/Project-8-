import React, { useState } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Carousel({ logement }) {
    // J'utilise un state pour garder en mémoire l'index de l'image actuelle.
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Si ya pas de logement ou pas d'images, je montre un message de chargement.
    if (!logement || !logement.pictures || !logement.pictures.length) {
        return <div>Chargement...</div>;
    }

    // Cette fonction, c'est pour aller à l'image suivante dans le carrousel.
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            // Si c'est la dernière image, je reviens à la première.
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Là, c'est pour retourner à l'image précédente.
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            // Si c'est la première image, je vais à la dernière.
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    // Ici, je rends le carrousel avec l'image actuelle et un compteur d'images.
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

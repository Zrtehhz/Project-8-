import React, { useState } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ logement }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!logement || !logement.pictures || logement.pictures.length === 0) {
        return <div>Chargement...</div>;
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <main className="fiche-logement">
            <div className="carrousel-logement">
                <img src={logement.pictures[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
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

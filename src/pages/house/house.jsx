import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/header';
import Footer from '../../Components/footer/footer';
import Carousel from '../../Components/carousel/carousel';
import Logements from '../../data/data.json';   
import RatingStars from '../../Components/star/star';
import Desc from '../../Components/description/description';
import Equipment from '../../Components/equipement/equipment';
import './house.css';

function House() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = Logements.find(l => l.id === id);
        setLogement(foundLogement);
    }, [id]);

    return (
        <>
            <Header />
            {logement && (
                <>
                    <Carousel logement={logement} />
                    <div className="house-details">
                        <h1 className="house-title">{logement.title}
                            <div className="host-info">
                                <span>{logement.host.name}</span>
                                <img src={logement.host.picture} alt={logement.host.name} />
                                
                            </div>
                            <RatingStars rating={3} />

                        </h1>
                        <p className="location">{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>

                    </div>
                    <div className='collapsehouse'>
                    <div class="collapseItem">
                        <Desc />
                        </div>
                        <div class="collapseItem">
                        <Equipment />
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}

export default House;

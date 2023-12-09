import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import Logements from '../../data/data.json';
import RatingStars from '../../Components/Star/Star';
import Collapse from '../../Components/Collapse/Collapse';
import './house.css';

function House() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = Logements.find(logement => logement.id === id);
        setLogement(foundLogement);
    }, [id]);


    return (
        <>
            <Header />
            {logement && (
                <>
                    <Carousel logement={logement} />
                    <div className="house-details">
                        <h1 className="house-title">{logement.title}</h1>
                        <div className="contain">
                            <div className="host-info">
                                <span>{logement.host.name}</span>
                                <img src={logement.host.picture} alt={logement.host.name} />

                            </div>
                            <RatingStars rating={3} />
                            </div>
                        <p className="location">{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>

                    </div>
                    <div className='collapsehouse'>
                    <div class="collapseItem">
                            <Collapse
                                title="Équipements"
                                content={logement.equipments}
                            />
                            </div>
                        <div class="collapseItemm">
                            <Collapse
                                title="Description"
                                content={logement.description}
                            />
                        </div>
                    </div>

                </>
            )}
            <Footer />
        </>
    );
}

export default House;

import React from 'react';
import redStar from '../../Assets/red_star.png'; 
import greyStar from '../../Assets/grey_star.png'; 
import './star.css';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  // Ajoute les étoiles rouges selon la note
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={`red_${i}`} src={redStar} alt="Red Star" className="star" />);
  }

  // Avec des étoiles grises jusqu'à 5
  for (let i = rating; i < totalStars; i++) {
    stars.push(<img key={`grey_${i}`} src={greyStar} alt="Grey Star" className="star" />);
  }

  return <div className="rating">{stars}</div>;
};

export default RatingStars;

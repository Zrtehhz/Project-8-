import React, { useState } from 'react';
import './collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

//  Props title et content
function Collapse({ title, content }) {
  // State pour gérer l'état ouvert/fermé du contenu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour rendre le contenu, gère les arrays et le contenu simple
  const renderContent = () => {
    if (Array.isArray(content)) {
      // Si le contenu est un tableau, il est rendu comme une liste
      return (
        <div className="listeClass">
          {content.map((item) => (
            <>
             <p>{item}</p> 
            </>
          ))}
        </div>
      );
    } else {
      return <p className="paragrapheClass">{content}</p>;
    }
  };

  return (
    <div className='DivMain'>
      <button className='openCollapse' onClick={() => setIsOpen(!isOpen)}>
        <span className="buttonText">{title}</span> 
        <FontAwesomeIcon className='IconeCollapse' icon={isOpen ? faChevronDown : faChevronUp} /> 
      </button>

      {isOpen && renderContent()}
    </div>
  );
}

export default Collapse; 

import React, { useState, useEffect } from 'react';
import './equipment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Equipment({ equipments = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='divEquipment'>
      <button className='EquipmentButton' onClick={() => setIsOpen(!isOpen)}>
        Equipements
        <FontAwesomeIcon className='IconeCollapse' icon={isOpen ? faChevronDown : faChevronUp} /> 
      </button>
    
      {isOpen && Array.isArray(equipments) && (
  <div className='divText'>
    <ul>
      {equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
}

export default Equipment;

import React, { useState } from 'react';
import './equipment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Equipment = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='EquipmentButton' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Equipements' : 'Equipements'}
        <FontAwesomeIcon className='IconeCollapse' icon={isOpen ? faChevronDown : faChevronUp}/> 

      </button>
      {isOpen && <p>{equipments}</p>}
    </div>
  );
};

export default Equipment;

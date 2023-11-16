import React, { useState } from 'react';
import './description.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Desc({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='divEquipment'> 
      <button className="EquipmentButton" onClick={() => setIsOpen(!isOpen)}>
      Description
        <FontAwesomeIcon className='IconeCollapse' icon={isOpen ? faChevronDown : faChevronUp} />
      </button>

      {isOpen && (
        <div className='divText'> 
          <ul>
          {description}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Desc;

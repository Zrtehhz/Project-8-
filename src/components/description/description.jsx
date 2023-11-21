import React, { useState } from 'react';
import './description.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown  } from '@fortawesome/free-solid-svg-icons';

const Desc = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="DescButton" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'description' : 'description' }
        <FontAwesomeIcon className='IconeCollapse' icon={isOpen ? faChevronDown : faChevronUp} />

      </button>
      {isOpen && <p class="paragraph2">{description}</p>}
    </div>
  );
};

export default Desc;

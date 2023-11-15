import React, { useState } from 'react';
import './collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='DivMain'>
      <button className='openCollapse' onClick={() => setIsOpen(!isOpen)}>
      <span className="buttonText">{title}</span>
        <FontAwesomeIcon className='IconeCollapse' icon={faChevronUp} /> 
</button>

      {isOpen && <span className='divText'>{content}</span>}
    </div>
  );
}

export default Collapse;

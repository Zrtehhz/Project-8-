import React, { useState } from 'react';
import './collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <div className="listeClass">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              {item}{index < content.length - 1 && <br />}
            </React.Fragment>
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

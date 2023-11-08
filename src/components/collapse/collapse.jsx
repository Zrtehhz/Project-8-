import React, { useState } from 'react';
import './collapse.css';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
}

export default Collapse;

import React from 'react';
import './Advantage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Advantage({ icon, title, description }) {
  return (
    <div className="advantage_one">
      <div className="icon_here">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="advantage_heading">
        <h2>{title}</h2>
      </div>
      <div className="advantage_para">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Advantage;

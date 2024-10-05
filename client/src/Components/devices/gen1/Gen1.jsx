import React from 'react';
import './Gen1.css';
import "../../../assets/images/Lora.png"

function Gen1({ content, image }) {
  return (
    <div className="Gen1">
      <div className="imageContainer">
        <img src={image} alt="Device" />
      </div>
      <div className="device-content">
        <h1>Next Generation Device</h1>
        <p>{content}</p>
        <a href="#" className="btn">Explore More</a>
      </div>
    </div>
  );
}

export default Gen1;

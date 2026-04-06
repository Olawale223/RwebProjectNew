import React from 'react';
import './CardComponent.css';


function CardComponent({ image, textHead, textFoot, onClick, }) {
  
  return (
    <div className="card">
      <div className='card-image' onClick={onClick}>
      <img src={image} alt={textHead} />
      </div>
      <div className="card-content">
        <h3>{textHead}</h3>
        <p>{textFoot}</p>
      </div>
    </div>
  );
}


export default CardComponent;

import React from 'react'
import './SlotComponent.css';
import roleContent from '../Roles'

export default function SlotComponent({image, name, role}) {
  return (
    <div className="team-section">
      <div className='member-image-container'>
      <img src={image} alt={name} className='member-image'/>
      </div>
      <div className="team-member">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  )
}

import React from 'react'
import './FaqInfo.css'

function FaqInfo() {
  return (
    <div id='info'>
      <label htmlFor="Email">Email</label>
      <input type="text" id="email" placeholder='Your email address'/>
      <label htmlFor="Message">Message</label>
      <textarea name="message" id="message" placeholder='Drop a message'></textarea>
       <button className="info-message">Send Message</button>
    </div>
    
  )
}
export default FaqInfo;

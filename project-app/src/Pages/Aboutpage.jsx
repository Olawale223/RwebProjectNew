import React from 'react'
import  '../App.css';
// import '../Components/SlotComponent.css'
import RoleCard from '../Components/RoleCard';
import foodcourt from '../Assets/FoodCourt/foodcourt.mp4';
import origins from '../Assets/FoodCourt/origins.jpg'
import delivery from '../Assets/FoodCourt/delivery.jpeg'
import satisfied from '../Assets/FoodCourt/satisfied.jpeg'
import operations from '../Assets/FoodCourt/operations.png'
import building from '../Assets/FoodCourt/building.png'

 function Aboutpage() {
  return (
    <>
    


    <div className="about-container">
      <header className="hero-section">
        <h1>Creating the Future of Food Delivery Worldwide</h1>
        <div className="hero-video-container">
          <video autoPlay muted loop src={foodcourt} width={800} height={400} className='hero-video' />
        </div>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At FoodCourt, we strive to revolutionize food delivery by bringing quality, safety, and sustainability. We are
          committed to creating lasting connections between restaurants, delivery partners, and customers while ensuring
          the best possible experience for all.
        </p>
      </section>

      <section className="journey-section">
        <h2>The FoodCourt Journey</h2>
        <div className="journey-grid">
          <div className="journey-item">
            <img src={origins} alt="Various food items" width={300} height={200} className="journey-image" />
            <h3>Origins</h3>
            <p>Best flavors. Begin here.</p>
          </div>
          <div className="journey-item">
             <img
              src={operations}
              alt="Delivery operations"
              width={300}
              height={200}
              className="journey-image"
            /> 
            <h3>Operations</h3>
            <p>Seamless food experience.</p>
          </div>
          <div className="journey-item">
            <img src={delivery} alt="Food delivery" width={300} height={200} className="journey-image" />
            <h3>Delivering Excellence</h3>
            <p>Quality at your doorstep.</p>
          </div>
          <div className="journey-item">
            <img src={building} alt="Happy customers" width={300} height={200} className="journey-image" />
            <h3>Satisfied Guests</h3>
            <p>Smiles with every delivery.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Good Food, Good People</h2>
        <p>Meet the team</p>
       <RoleCard/>
      </section>
    </div>

    <div className="style-container">
     <div className="style-hero" style={{ backgroundImage: `url(${satisfied})` }}>
        <div className="style-overlay">
          <h1>Join us on our Journey</h1>
          <p>
            We're redefining dining experiences and growing fast. If you're passionate about making an impact,{" "}
            <a href="#contact">share your details</a> to let us know you're interested in joining the team.
          </p>
        </div>
      </div>
 </div>
    </>
  )
}

export default Aboutpage

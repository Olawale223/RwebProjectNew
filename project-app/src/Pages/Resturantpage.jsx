import ResturantCard from '../Components/ResturantCard';
import  '../App.css';

import Floatingimage from '../Components/Minor Components/Floatingimage';

 function Resturantpage() {
  return (
     <>
    
    <div className="Homepage-container">
        <h1>Meet the Restaurants</h1>
        <h4>Handpicked selection of top on-demand delivery restaurants.</h4>
        <div className="cardbody">
        <ResturantCard />
        </div>
        <Floatingimage/>
    </div>
    </>
  )
}

export default Resturantpage
import React from 'react'
import Product from '../Components/Product';
import  '../App.css';
import Floatingimage from '../Components/Minor Components/Floatingimage';

export default function Productpage() {
  return (
 <>

  <div className="Homepage-container">
    <h2>Get mouth-watering dishes </h2>
    <h2>from Sunny Side Club.</h2>
    <div className="cardbody">
    <Product/>
    </div>
    <h2>Get meal updates from Mama's Kitchen</h2>
    <h2> on Instagram.</h2>
    <Floatingimage/>
</div>
</>
  )
}

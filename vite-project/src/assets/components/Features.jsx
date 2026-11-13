import React from 'react'
import Quality from './images/Quality.jpeg';
import Fresh from './images/Fresh.jpeg';
import Taste from './images/Taste.jpeg';
import './Features.css';
const Features = () => {
  return (
    <div>
<div className="container-fluid px-0 py-5" id="featured-3">    <h2 class="pb-2 border-bottom">Our Services</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
       
    
       <img src={Quality} alt="Best Quality Food" className="feature-img" />
        <h2>Best Quality</h2>
        <p>"We are committed to providing the best quality food, prepared with care and attention to every detail."</p>
        
      </div>
      <div class="feature col">
        
          
        <img src={Fresh} alt="Freshly Prepared Food" className="feature-img" />
        <h2>Freshly Prepared</h2>
        <p>"Our meals are made fresh daily, ensuring maximum flavor and nutritional value."</p>
       
      </div>
      <div class="feature col">
       
       <img src={Taste} alt="Delicious Taste" className="feature-img" />
        <h2>Delicious Taste</h2>
        <p>"Our dishes are crafted with the finest ingredients, delivering a burst of flavor in every bite."</p>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Features

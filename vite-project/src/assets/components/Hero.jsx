
import React from 'react'
import Kababs from './images/Kababs.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 hero-content">

        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Kababs}
            className="d-block mx-lg-auto img-fluid"
            alt="Delicious homemade kababs"
            width="700"
            height="500"
          />
        </div>

        <div className="col-lg-6 hero-text">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Homemade Goodness, made with love
          </h1>

          <p className="lead">
            Enjoy delicious homemade frozen food, prepared with care and filled with the authentic flavours you love.
          </p>

          <div className="d-grid gap-2 d-md-flex">
            <button className="btn order-btn btn-lg px-4">
              Order Now
            </button>

            <button className="btn learn-btn btn-lg px-4">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero

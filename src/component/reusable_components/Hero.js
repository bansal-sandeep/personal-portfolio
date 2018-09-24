import React from 'react';
import heroSvg from '../../assets/svg/hero-img.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 mb-5">
            <span className="u-label mt-lg-5">Full Stack Developer</span>
            <h1>I'am sandeep bansal</h1>
            <p>
              A unique and beautiful collection of UI elements that are all
              flexible and modular. A complete and customizable solution to
              building the website of your dreams.
            </p>
            <button className="btn btn-primary-air"> Check Me Out </button>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <img src={heroSvg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import heroSvg from '../../assets/svg/hero-img4.svg';

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <h1 className="mt-lg-5">Hi, I'am Sandeep Bansal</h1>
            <p className="lead">
              I'm a passionate full stack web developer with more than 1 years
              of experience in UI/UX design, as well as in reactjs, nodejs and
              mongodb. I'm based in Delhi, India.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-center">
            <img
              src={heroSvg}
              alt="hero img"
              className="img-fluid"
              width="250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

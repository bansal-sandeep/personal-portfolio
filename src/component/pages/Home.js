import React from 'react';

// Components
import Hero from '../reusable_components/Hero';
import SectionIntro from '../reusable_components/SectionIntro';
import CardPrimary from '../reusable_components/CardPrimary';

// Assets
import pointerSvg from '../../assets/svg/svg-pointer.svg';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <section className="key-skills">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4" />
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <SectionIntro />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4" />
          </div>
          <img src={pointerSvg} alt="" className="img-fluid" />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
              <CardPrimary />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <CardPrimary />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

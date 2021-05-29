import React from 'react';
import phoneImg from '../images/phone.svg';
import { FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Hero = () => {
  
  return (
    <div className='hero'>
      <div className="hero__center">
        <div className="hero__info">
          <h1>Payments infrastructure
          for the internet</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className="btn">
            Start now
            <div className="btn__icon"><FaAngleRight className='icon'/></div>            
          </button>
        </div>
        <div className="hero__images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

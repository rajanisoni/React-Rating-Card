import React from 'react';
import Image from './Mobile.svg';
import { Link, Routes, Route } from 'react-router-dom';

// import './SubmitPage.css';

const SubmitPage = ({ Rating }) => {
  
  return (
    <>
    <Link to="/"> Back </Link>
    <div className="card container">
      <img src={Image} className="mobile-img" alt="Your SVG" />

      <div className="rating-text">
        <p> You selected {Rating} out of 5</p>
      </div>

      <div className="thankyou-text">
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
    </>
  );
};

export { SubmitPage };

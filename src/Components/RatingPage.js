import React from 'react';
import { Form } from './Form';
import '../style.css';

export function RatingPage({ setRating }) {
  // console.log(setRating)
  return (
    <div className="card">
      <div className="starbox">
        <img
          className="star-img"
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/star_2b50.png"
        />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Form setRating={setRating} />
    </div>
  );
}

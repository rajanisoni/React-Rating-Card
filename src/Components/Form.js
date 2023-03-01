import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ setRating }) => {
  //
  const [IsRated, setIsRated] = useState(false);

  const numberArray = [1, 2, 3, 4, 5];
  const buttons = numberArray.map((elem) => {
    // const orange = IsRated ? ".orange" : null
    // console.log(orange)

    return (
      <button
        className="number-btn number"
        key={elem}
        onClick={handleNumChange}
      >
        {elem}
      </button>
    );
  });

  function handleNumChange(e) {
    setRating(e.target.innerHTML);
    setIsRated(true);
  }
  return (
    <>
      <div className="number-box">{buttons}</div>
      <Link to={IsRated ? '/submit' : '#'} className="submit-button">
        <strong>SUBMIT </strong>
      </Link>
    </>
  );
};

export { Form };

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './style.css';
import { RatingPage } from './Components/RatingPage';
import { SubmitPage } from './Components/SubmitPage';

export default function App() {
const [Rating, setRating] = React.useState("0")

  return (
    <>
      

      <Routes>
        <Route path="/" element={<RatingPage setRating={setRating}/>} />
        <Route path="/submit" element={<SubmitPage Rating={Rating}/>} />
      </Routes>
    </>
  );
}

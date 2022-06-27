import React, { useState } from "react";
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <div className="star-rating">
      <h1 className="rating-header">Please Rate Us</h1>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
              }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
import React, { useState } from 'react';
import "component/StarRating/style.scss"; // Đảm bảo bạn đã định nghĩa các kiểu CSS trong file này

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseOver = (value) => {
    setHoveredRating(value);
  };

  const handleMouseOut = () => {
    setHoveredRating(0);
  };

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isSelected = starValue <= rating;
        const isHovered = starValue <= hoveredRating;

        return (
          <span
            key={starValue}
            className={`star ${isSelected || isHovered ? 'selected' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseOut={handleMouseOut}
          >
            &#9734; {/* Unicode star */}
          </span>
        );
      })}
    </div>
  );
};
  
export default StarRating;

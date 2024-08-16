import React from 'react';

const StarRating = ({ rating, maxRating = 5 }) => {
     // Generate an array of stars based on the rating value
     const stars = [];

     for (let i = 1; i <= maxRating; i++) {
          stars.push(
               <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i <= rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${i <= rating ? "text-yellow-500" : "text-gray-400"}`}
               >
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.365a1 1 0 00.95.69h6.706c.97 0 1.371 1.24.588 1.81l-5.392 3.853a1 1 0 00-.364 1.118l2.062 6.365c.3.921-.755 1.688-1.54 1.118l-5.392-3.853a1 1 0 00-1.176 0l-5.392 3.853c-.785.57-1.84-.197-1.54-1.118l2.062-6.365a1 1 0 00-.364-1.118L.445 11.792c-.783-.57-.383-1.81.588-1.81h6.706a1 1 0 00.95-.69l2.062-6.365z"
                    />
               </svg>
          );
     }

     return <div className="flex">{stars}</div>;
};

export default StarRating;

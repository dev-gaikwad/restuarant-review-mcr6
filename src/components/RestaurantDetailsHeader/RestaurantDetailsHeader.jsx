import React from 'react';

import styles from './RestaurantDetailsHeader.module.css';

const RestaurantDetailsHeader = ({ details, setDisplayModal }) => {
  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.description}</p>
      <p>Phone : {details.phone}</p>
      <ul>
        <p>Our dishes:</p>
        {details.menu.map((dish, index) => (
          <li key={index}>{dish.name}</li>
        ))}
      </ul>
      <p>Average Rating : {details.averageRating}</p>

      <button onClick={() => setDisplayModal(true)}>Add Rating</button>
    </div>
  );
};

export default RestaurantDetailsHeader;

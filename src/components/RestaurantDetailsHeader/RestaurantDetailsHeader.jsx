import React from 'react';

import styles from './RestaurantDetailsHeader.module.css';

const RestaurantDetailsHeader = ({ details, setDisplayModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
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
      </div>
      <button className={styles.addBtn} onClick={() => setDisplayModal(true)}>
        Add Review
      </button>
    </div>
  );
};

export default RestaurantDetailsHeader;

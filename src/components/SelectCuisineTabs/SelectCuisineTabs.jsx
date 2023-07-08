import React from 'react';
import { useData } from '../../context/restaurantContext';

import styles from './SelectCuisineTabs.module.css';

const SelectCuisineTabs = () => {
  const data = useData();
  return (
    <section className={styles.cuisinesTab}>
      <h1>Select Your Cuisine :</h1>
      <div className={styles.cuisineTabBtnContainer}>
        {data.cuisines.map((cuisine) => (
          <button
            className={styles.cuisineButton}
            key={cuisine.id}
            onClick={() => data.setSelectedCuisine(cuisine.id)}
          >
            {cuisine.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SelectCuisineTabs;

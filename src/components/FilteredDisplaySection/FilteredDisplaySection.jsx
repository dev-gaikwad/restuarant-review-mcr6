import React from 'react';
import { useData } from '../../context/restaurantContext';
import RestaurantDishSection from '../RestaurantDishSection/RestaurantDishSection';

import styles from './FilteredDisplaySection.module.css';

const FilteredDisplaySection = () => {
  const { filteredData } = useData();

  return (
    <section className={styles.filterSection}>
      {filteredData.length ? (
        filteredData.map((restaurant) => (
          <RestaurantDishSection data={restaurant} key={restaurant.id} />
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default FilteredDisplaySection;

import React from 'react';

import styles from './DishesCard.module.css';

const DishesCard = ({ dish, restaurant }) => {
  const { name, imgSrc, price, qty } = dish;
  return (
    <article className={styles.dishCard}>
      <div className={styles.imgDiv}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={styles.description}>
        <h4 className={styles.dishname}>{name}</h4>
        <p>
          Rs. {price} for {qty}
        </p>
        <p>{restaurant}</p>
      </div>
    </article>
  );
};

export default DishesCard;

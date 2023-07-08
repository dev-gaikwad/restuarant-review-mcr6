import React from 'react';

import styles from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  const { pp, revName, rating, comment } = review;
  return (
    <article>
      <div className={styles.header}>
        <div className={styles.info}></div>
        <img src={pp} alt='PP' />
        <p>{revName}</p>
        <div className={styles.rating}>
          <p>{rating}</p>
        </div>
        <p className={styles.comment}>{comment}</p>
      </div>
    </article>
  );
};

export default ReviewCard;

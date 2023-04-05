import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart.svg" alt="Favorite" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} сум</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="card" />
        </button>
      </div>
    </div>
  );
};

export default Card;
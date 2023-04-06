import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl, onPlusClick }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onPlusClick();
    setIsAdded(!isAdded);
  };

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

        <img
          className={styles.plus}
          onClick={handleAdd}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="card"
        />
      </div>
    </div>
  );
};

export default Card;

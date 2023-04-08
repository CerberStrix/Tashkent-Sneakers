import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

const Card = ({
  title,
  price,
  imageUrl,
  onPlusClick,
  onFavorite,
  favorited = false,
  added = false,
  isLoading,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setFavorite] = useState(favorited);

  const handleAdd = () => {
    onPlusClick();
    setIsAdded(!isAdded);
  };

  const handleOnFavorite = () => {
    setFavorite(!isFavorite);
    onFavorite();
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <>
          <ContentLoader
            speed={0}
            width={155}
            height={250}
            viewBox="0 0 150 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
            <rect x="0" y="168" rx="5" ry="5" width="150" height="15" />
            <rect x="0" y="193" rx="5" ry="5" width="100" height="15" />
            <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="113" y="226" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        </>
      ) : (
        <>
          <div onClick={handleOnFavorite} className={styles.favorite}>
            <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Favorite" />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
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
        </>
      )}
    </div>
  );
};

export default Card;

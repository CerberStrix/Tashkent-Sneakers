import React from 'react';
import { Card } from '../components';

export const Favorites = ({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  onClearSearchValue,
}) => {
  console.log(items);
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((obj, index) => (
          <Card
            key={index}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onPlusClick={() => onAddToCart(obj)}
            onFavorite={() => onAddToFavorites(obj)}
            favorited={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

import React from 'react';
import { Card } from '../components';
import AppContext from '../context.js';

export const Favorites = () => {
  const { favorites, onAddToFavorites, onAddToCart } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((obj, index) => (
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

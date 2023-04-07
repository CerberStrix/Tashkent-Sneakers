import React from 'react';
import { Card } from '../components';

export const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  onClearSearchValue,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск кроссовок..."
          />
          {searchValue && (
            <img
              className="clear cu-p"
              onClick={onClearSearchValue}
              src="/img/btn-remove.svg"
              alt="Remove"></img>
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlusClick={() => onAddToCart(obj)}
              onFavorite={() => onAddToFavorites(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

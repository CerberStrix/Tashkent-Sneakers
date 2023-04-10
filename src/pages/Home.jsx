import React from 'react';
import { Card } from '../components';

export const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  onClearSearchValue,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((obj, index) => (
      <Card
        key={index}
        onPlusClick={onAddToCart}
        onFavorite={() => onAddToFavorites(obj)}
        isLoading={isLoading}
        {...obj}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="search" />

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск кроссовок..."
          />
          {searchValue && (
            <img
              className="clear cu-p"
              onClick={onClearSearchValue}
              src="img/btn-remove.svg"
              alt="Remove"></img>
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;

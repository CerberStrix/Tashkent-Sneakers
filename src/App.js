import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Card, Header, Drawer } from './components';
import Home from './pages/Home';
import Favorites from './pages/Favorite';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/items');
      setItems(data);
    };
    const fetchCartItems = async () => {
      const { data } = await axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart');
      setCartItems(data);
    };
    fetchItems();
    fetchCartItems();
  }, []);

  const onAddToCart = (obj) => {
    const postItems = async () => {
      await axios.post('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart', obj);
    };
    postItems();
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = (obj) => {
    if (favorites.find((item) => item.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    const deleteItems = async () => {
      await axios.delete(`https://642efdd98ca0fe3352dde76c.mockapi.io/Cart/${id}`);
    };
    deleteItems();
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClearSearchValue = () => {
    setSearchValue('');
  };

  console.log(favorites);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onClearSearchValue={onClearSearchValue}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;

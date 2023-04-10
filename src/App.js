import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Header, Drawer } from './components';

import Home from './pages/Home';
import Favorites from './pages/Favorite';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const deleteItems = async (id) => {
    try {
      await axios.delete(`https://642efdd98ca0fe3352dde76c.mockapi.io/Cart/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const [itemsResponse, cartResponse] = await Promise.all([
          axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/items'),
          axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart'),
        ]);
        setLoading(false);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      deleteItems(findItem.id);
    } else {
      try {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onAddToFavorites = (obj) => {
    if (favorites.find((item) => item.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    deleteItems(id);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClearSearchValue = () => {
    setSearchValue('');
  };

  const isItemsAdded = (id) => {
    return cartItems.some((items) => Number(items.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemsAdded,
        onAddToFavorites,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          setCartOpened={setCartOpened}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="Tashkent-Sneakers"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorites={onAddToFavorites}
                onClearSearchValue={onClearSearchValue}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
            exact
          />
          <Route path="favorites" element={<Favorites />} exact />
          <Route path="orders" element={<Orders />} exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

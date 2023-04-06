import React from 'react';
import axios from 'axios';
import { Card, Header, Drawer } from './components';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/items');
      setItems(data);
    };
    fetchItems();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск кроссовок..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlusClick={() => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

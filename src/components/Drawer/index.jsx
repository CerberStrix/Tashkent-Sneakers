import React from 'react';
import axios from 'axios';
import Info from '../Card/Info';
import { useCart } from '../../hooks/useCart';
import styles from './Drawer.module.scss';
import { getNumberLocale } from '../../utils';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onRemove, setCartOpened, opened, items = [] }) => {
  const { setCartItems, price } = useCart();
  const [isOrderComplete, setOrder] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setLoading(true);
      setOrder(true);
      setCartItems([]);
      const { data } = await axios.get('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart');
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        await axios.delete('https://642efdd98ca0fe3352dde76c.mockapi.io/Cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось сделать заказ :(');
    }
    setLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="mb-30 justify-between d-flex">
          Корзина{' '}
          <img
            onClick={() => setCartOpened(false)}
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Remove"></img>
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items flex itemsContainer">
              {items.map((obj, index) => (
                <div key={`${index}${obj.title}`} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"></img>
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{getNumberLocale(price)} сум</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{getNumberLocale((price / 100) * 5)} сум</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton" disabled={isLoading}>
                Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен ' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? 'Ваш заказ #18 скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;

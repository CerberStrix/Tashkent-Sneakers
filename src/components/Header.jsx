import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from '../hooks/useCart';
import { getNumberLocale } from '../utils';

const Header = ({ onClickCart }) => {
  const { price } = useCart();

  return (
    <header className="d-flex justify-between p-40">
      <Link to="Tashkent-Sneakers">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Tashkent Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="img/cart.svg" alt="cart" />
          <span>{getNumberLocale(price)} сум.</span>
        </li>
        <li>
          <Link to="favorites">
            <img className="mr-20 cu-p" idth={18} height={18} src="img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img idth={18} height={18} src="img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

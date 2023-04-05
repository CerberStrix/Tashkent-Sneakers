import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-between p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">Tashkent Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 сум.</span>
        </li>
        <li>
          <img idth={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from 'react';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 justify-between d-flex">
          Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"></img>
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 сум</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 сум</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 419 сум</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 сум</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
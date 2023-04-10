import React from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { setCartItems, cartItems } = React.useContext(AppContext);
  const price = cartItems.reduce((sum, { price }) => price + sum, 0);

  return { cartItems, setCartItems, price };
};

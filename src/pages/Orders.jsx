import React from 'react';
import { Card } from '../components';

const fakeOrder = [
  {
    id: 9,
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 12999,
    imageUrl: '/img/sneakers/9.jpg',
  },
  {
    id: 10,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/10.jpg',
  },
];

export const Orders = () => {
  const [orders] = React.useState(fakeOrder);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {orders.map((obj, index) => (
          <Card {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Orders;

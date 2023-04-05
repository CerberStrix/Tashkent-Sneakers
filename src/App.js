import { Card, Header, Drawer } from './components';

const items = [
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg',
  },
  { title: 'Мужские кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg' },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 12999,
    imageUrl: '/img/sneakers/4.jpg',
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 12999,
    imageUrl: '/img/sneakers/5.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 12999,
    imageUrl: '/img/sneakers/6.jpg',
  },
  {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 12999,
    imageUrl: '/img/sneakers/7.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 12999,
    imageUrl: '/img/sneakers/8.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 12999,
    imageUrl: '/img/sneakers/9.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/10.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 12999,
    imageUrl: '/img/sneakers/11.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 12999,
    imageUrl: '/img/sneakers/12.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск кроссовок..." />
          </div>
        </div>
        <div className="d-flex">
          {items.map(({ title, price, imageUrl }, index) => (
            <Card key={`title_${index}`} title={title} price={price} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

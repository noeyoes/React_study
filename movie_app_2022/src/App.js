import React from "react";
import PropTypes from 'prop-types';

function Food({ name, rating, picture, }) {
  return (
    <div>
      <h2>I like { name } </h2>
      <h4>👑 { rating }/5.0</h4>
      <img src={picture} alt={ name } />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://w.namu.la/s/9df680ac2428d5d026761388fb8aa3cda6f6d693f1994e70d5d2a3bcd1cb61bcc9d01213b912fcd2410f7608dd3eabb243817e3e8fbf79ee2f7858f59d3f3a7ef22cdb84bd9e01182a2b702636f10dc9333e796229a21f6058bb481fc13ac8467739a2e09ef43e7505f0fe48a9d2297f',
    rating: 2,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg',
    rating: 4.8,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} korean={dish.korean} />;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image} korean={dish.korean} />;

function App() {
  return(
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} picture={dish.image} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

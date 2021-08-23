import React from 'react';
import PropTypes from "prop-types";

function Food({name,picture,rating}){
  return <div>  
    <h3>i like{name}</h3> 
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>
}
Food.propTypes={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
const ilike=[
  {
    id:1,
    name:"1",
    image:"https://image.news1.kr/system/photos/2021/5/20/4779738/article.jpg/dims/optimize",
    rating:5
  },
  {
    id:2,
    name:"2",
    image:"https://t1.daumcdn.net/cfile/tistory/99707E3D5AA136C708",
    rating:5
  },
  {
    id:3,
    name:"3",
    image:"https://i1.sndcdn.com/artworks-000611705665-7k4zay-t500x500.jpg",
    rating:5
  },
  {
    id:4,
    name:"4",
    image:"https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_188127_16142386024553959.jpg",
    rating:5
  }
];

function renderFood(dish){
  return<Food 
  name={dish.name} 
  picture={dish.image}
  key={dish.id}
  rating ={dish.rating}/>
}

function App() {
  return <div>{ilike.map(renderFood)}</div>
}

export default App;

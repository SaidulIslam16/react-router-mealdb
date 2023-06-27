import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strArea, strCategory } = meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>Area: {strArea}</p>
            <p>Category: {strCategory}</p>
            <button>Add to Cart</button>
            <Link to={`/meals/${idMeal}`}><button className='show-dtls-btn'>Show Details</button></Link>
        </div>
    );
};

export default Meal;
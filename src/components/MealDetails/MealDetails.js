import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './MealDetails.css'

const MealDetails = () => {
    const mealDtls = useLoaderData();
    const { strArea, strCategory, strMeal, strMealThumb, strSource, strInstructions } = mealDtls.meals[0];
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <h1>Meal Name: {strMeal}</h1>
            <p>Serve Area: {strArea}</p>
            <p>Category: {strCategory}</p>
            <p><strong>Details:</strong> {strInstructions}</p>
        </div>
    );
};

export default MealDetails;
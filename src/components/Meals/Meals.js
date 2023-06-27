import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    let meals = useLoaderData();
    meals = meals.meals;
    // console.log(meals)
    return (
        <div>
            <h1>Selected the Beast Meal in the Town</h1>
            <div className='meals'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;
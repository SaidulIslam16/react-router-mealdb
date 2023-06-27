import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    let meals = useLoaderData();
    meals = meals.meals
    return (
        <div>
            <h1>Welcome to our Restaurant</h1>
        </div>
    );
};

export default Home;
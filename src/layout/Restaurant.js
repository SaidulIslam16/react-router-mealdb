import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Restaurant = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Restaurant;
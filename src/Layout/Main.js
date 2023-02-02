import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Footer from '../Shared/Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Login />
        </div>
    );
};

export default Main;
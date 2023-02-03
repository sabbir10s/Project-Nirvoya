import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Footer from '../Shared/Footer';
import Navbar from './Navbar';

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const Main = () => {
    return (
        <div>
            <ScrollToTop>
                <Navbar />
                <Outlet />
                <Footer />
                <Login />
            </ScrollToTop>
        </div>
    );
};

export default Main;
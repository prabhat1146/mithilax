import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='min-h-screen'>
            <Navbar/>
            <div className='min-h-screen'>

            <Outlet className="min-h-screen"/>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;

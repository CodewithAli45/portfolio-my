import React from 'react';
import { Navbar } from './Navbar';
import { Backdrop } from './Backdrop';
import { Projects } from './Projects';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Backdrop />
            <Projects />
        </div>
    );
}


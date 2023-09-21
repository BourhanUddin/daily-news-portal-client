import React from 'react';
import NavigationBar from '../pages/Shored/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const AboutLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default AboutLayout;
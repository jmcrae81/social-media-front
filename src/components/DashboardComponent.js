import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ManageProfileComponent from './ManageProfileComponent';
import HomepageComponent from './HomepageComponent';
import FindFriendsComponent from './FindFriendsComponent';
import FriendsComponent from './FriendsComponent';
import NavbarComponent from './NavbarComponent';

const DashboardComponent = () => {
    return (
        <>
        <div className="container mt-5">
            <NavbarComponent/>
        </div>
        </>
    );
};

export default DashboardComponent;
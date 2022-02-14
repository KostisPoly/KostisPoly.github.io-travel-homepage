import React from 'react';
import './App.scss';
import { Cta, NavBar, SearchForm, WhyToBook, Destinations, Places, Newsletter, MobileApp, Footer } from './components'

const App = () => {
    return (
        <div className='container'>
            <NavBar />
            <SearchForm />
            <WhyToBook />
            <Destinations />
            <Places />
            <Newsletter />
            <MobileApp />
            <Footer />
        </div>
    );
};

export default App;

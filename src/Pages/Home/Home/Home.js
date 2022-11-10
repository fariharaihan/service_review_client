import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import CakeAbout from '../CakeAbout/CakeAbout';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CakeAbout></CakeAbout>
            <Services></Services>
        </div>
    );
};

export default Home;
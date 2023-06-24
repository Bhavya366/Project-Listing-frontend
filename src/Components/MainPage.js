import React from 'react';
import Navbar from './Navbar'
import Banner from './Banner';
import Footer from './Footer';
import ModalBody from './ModalBody';

const MainPage = () => {
    
    return (
        <div>
            <Navbar  />
            <Banner />
            <Footer />
            <ModalBody />
        </div>
    );
};

export default MainPage;
import React from 'react';
import Navbar from './Navbar'
import Banner from './Banner';
import Footer from './Footer';
import ModalBody from './ModalBody';

const MainPage = () => {
    
    return (
        <div>
            {/*Navbar is for displaying the navbar components like login and logout signup routes  */}
            <Navbar  /> 
            {/* middle part like banner will display */}
            <Banner />
            {/* footer part where all the selected and filteration of products will happen */}
            <Footer />
            {/* for displaying modal when text variable is true in contextAPi */}
            <ModalBody />
        </div>
    );
};

export default MainPage;
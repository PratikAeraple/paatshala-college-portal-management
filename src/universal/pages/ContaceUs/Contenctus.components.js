import React from "react";
import './Contectus.styles.css';
import Header from './../../components/header/Header.components';
import Navbar from './../../components/navbar/Navbar.components';
import Footer from './../../components/Footer/Footer.components';
import Footerbottom from './../../components/FooterBottom/Footerbottom.components';

function Contectus() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Contact Us</h1></div>
           
            <div className="contectus-box">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h2 align="center">You can contact us at paatshala@gmail.com </h2>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <Footer />
            <Footerbottom />
        </div>
    )

}

export default Contectus;
import React from "react";
import ImageSlider from "../../components/Imageslider/Imageslider.components";
import { sliderdata } from "../../components/Imageslider/sliderdata";
import './Event.styles.css';
import Header from './../../components/header/Header.components';
import Navbar from './../../components/navbar/Navbar.components';
import Footer from './../../components/Footer/Footer.components';
import Footerbottom from './../../components/FooterBottom/Footerbottom.components';

function Event() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Events</h1></div>
            <div className="event-box">
                <p>
                    <span>VIBES</span> is the Inter-Collegiate Fest of M.V.L.U. College comprising of 
                    many Indoor & Outdoor events and games.
                </p>
                <p>VIBES has emerged a well recognized platform for students and various colleges to 
                    participate and register their talent. It was held on 18 Dec to 20 Dec 2017.
                </p>
                <span>Events: Box-Cricket, Rink-Football, Badminton, Table-tennis, Carrom, Chess, Dance, Singing, 
                    Rapping Gaming Events- NFS & Counter Strike, Mobile-Events- Mini-Militia & Clash Royale, 
                    CEC (Code Execution Championship).
                </span>
                <p>This year we had respected police officers from Mumbai police as our chief guests.</p>
                <p>Our judges <span>Mr. Bihag Mehta </span> who is known for his guitar skills and is an 
                appreciated singer accompanied with our second judge <span>Ms. Sargam Thakur </span> who is 
                a vocalist and musician.</p>
                <p>We had Choreographers <span>Mr. Gaurav Sonavane</span> and <span>Mr. Geet Das</span> as 
                our judges with excellent dancing skills.</p>
                <p>
                We appreciate their dedication and the arduous task they had in determining the finalists 
                and, ultimately there were two winners selected at first prize.
                </p>
                <ImageSlider  slides={sliderdata}/>
            </div>
      
            <Footer />
            <Footerbottom />
        </div>
    )

}

export default Event;
import React from "react";
import './Footerbottom.css'
import {Link} from 'react-router-dom';

function Footerbottom (){
    return(
        <div className="footerBootom"> 
            <div className="fboptions">
                <Link className="fboption" to="/Academic">Academic</Link>
                <Link className="fboption" to="/Event">Event</Link>
                <Link className="fboption" to="/ContactUs">Contact Us</Link> 
                <Link className="fboption" to="/AboutUs">About Us</Link>    
            </div>
            <div className="fbsecondsection">
                <p className="p">DEVELOPED BY: <a href="https://www.linkedin.com/in/pratik-aeraple-73b1471b1/" className="a" target="_blank">PRATIK AERAPLE</a> & <a href="https://www.linkedin.com/in/ayan-khatri-347344219/" className="a" target="_blank">AYAN KHATRI</a> </p>
            </div>
        </div>
    )
}

export default Footerbottom;
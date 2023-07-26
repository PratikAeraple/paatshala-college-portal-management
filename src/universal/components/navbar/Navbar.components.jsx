import React from "react";
import './Navbar.styles.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="options">
            <Link className="option" to="/Academic">Academic</Link>
            <Link className="option" to="/Event">Event</Link>
            <Link className="option" to="/ContactUs">Contact Us</Link> 
            <Link className="option" to="/AboutUs">About Us</Link>    
        </div>
    ) 
}

export default Navbar;
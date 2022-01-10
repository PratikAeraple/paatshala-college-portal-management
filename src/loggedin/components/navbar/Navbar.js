import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="options">
            <Link className="option" to="/classroom">Classroom</Link>
            <Link className="option" to="/facultycontact">Faculty Contact</Link>
            <Link className="option" to="/library">Library</Link>
            <Link className="option" to="/Textbook">Textbook</Link> 
            <Link className="option" to="/Result">Result</Link>    
            <Link className="option" to="/coursedetail">Course Detail</Link>    
            <Link className="option" to="/feepayment">Fees Payment</Link>    
        </div>
    ) 
}

export default Navbar;



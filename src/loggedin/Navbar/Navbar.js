import React, { useState } from "react";
import './navbar.css';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div>
            <div className="hamburger-menu">
                

                <GiHamburgerMenu  onClick={() => setShowMediaIcons(!showMediaIcons)} />
               
            </div>    
        <div className= { showMediaIcons ? "options menu-link" : "options"}>
            
            <Link className="option" to="/classroom">Classroom</Link>
            <Link className="option" to="/attendance">Attendance</Link>
            <Link className="option" to="/facultycontact">Faculty Contact</Link>
            <Link className="option" to="/library">Library</Link>
            <Link className="option" to="/Textbook">Textbook</Link> 
            <Link className="option" to="/Result">Result</Link>    
            <Link className="option" to="/coursedetail">Course Detail</Link>    
            <Link className="option" to="/feepayment">Fees Payment</Link>
        </div>

        </div>
    ) 
}

export default Navbar;
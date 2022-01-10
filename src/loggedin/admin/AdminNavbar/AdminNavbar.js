import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function AdminNavbar() {
    return(
        <div className="optionsAdmin">
            <Link className="optionAdmin" to="/classroom">Classroom</Link>
            <Link className="optionAdmin" to="/facultycontact">Faculty Contact</Link>
            <Link className="optionAdmin" to="/library">Library</Link>
            <Link className="optionAdmin" to="/Textbook">Textbook</Link> 
            <Link className="optionAdmin" to="/Result">Result</Link>    
            <Link className="optionAdmin" to="/coursedetail">Course Detail</Link>    
            <Link className="optionAdmin" to="/feepayment">Fees Payment</Link>    
        </div>
    ) 
}

export default AdminNavbar;



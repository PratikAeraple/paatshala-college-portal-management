import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function AdminNavbar() {
    return(
        <div className="optionsAdmin">
            <Link className="optionAdmin" to="/admin/classroom">Classroom</Link>
            <Link className="optionAdmin" to="/admin/facultycontact">Faculty Contact</Link>
            <Link className="optionAdmin" to="/admin/library">Library</Link>
            <Link className="optionAdmin" to="/admin/Textbook">Textbook</Link> 
            <Link className="optionAdmin" to="/admin/Result">Result</Link>    
            <Link className="optionAdmin" to="/admin/coursedetail">Course Detail</Link>    
            <Link className="optionAdmin" to="/admin/feepayment">Fees Payment</Link>    
        </div>
    ) 
}

export default AdminNavbar;



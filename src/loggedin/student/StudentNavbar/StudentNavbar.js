import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function StudentNavbar() {
    return(
        <div className="optionsStudent">
            <Link className="optionStudent" to="/classroom">Classroom</Link>
            <Link className="optionStudent" to="/student/facultycontact">Faculty Contact</Link>
            <Link className="optionStudent" to="/student/library">Library</Link>
            <Link className="optionStudent" to="/student/Textbook">Textbook</Link> 
            <Link className="optionStudent" to="/student/Result">Result</Link>    
            <Link className="optionStudent" to="/student/coursedetail">Course Detail</Link>    
            <Link className="optionStudent" to="/student/feepayment">Fees Payment</Link>    
        </div>
    )  
}

export default StudentNavbar;

 

import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function TeacherNavbar() {
    return(
        <div className="optionsTeacher">
            <Link className="optionTeacher" to="/teacher/classroom">Classroom</Link>
            <Link className="optionTeacher" to="/teacher/facultycontact">Faculty Contact</Link>
            <Link className="optionTeacher" to="/teacher/library">Library</Link>
            <Link className="optionTeacher" to="/teacher/Textbook">Textbook</Link> 
            <Link className="optionTeacher" to="/teacher/Result">Result</Link>    
            <Link className="optionTeacher" to="/teacher/coursedetail">Course Detail</Link>    
            <Link className="optionTeacher" to="/teacher/feepayment">Fees Payment</Link>    
        </div>
    ) 
}

export default TeacherNavbar;



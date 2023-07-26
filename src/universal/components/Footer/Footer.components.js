import React from "react";
import './Footer.styles.css';
import {Link} from 'react-router-dom';

function Footer (){
    return(
        <div className="footer"> 
            <div><Link className="f-title" to="/"><h1> PAATSHALA</h1></Link></div>
           
        </div>
    )
}

export default Footer;
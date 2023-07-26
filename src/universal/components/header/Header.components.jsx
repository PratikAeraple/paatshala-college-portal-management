import React from "react";
import './Header.styles.css'
import logo from '../../assets/Paatshala.svg';
import {Link} from 'react-router-dom';


function Header() {
    return(
        <div className="container">
            <div className="logo"><Link to="/"><img src={logo} alt="" /></Link></div>
            <Link className="title" to="/"><h1> PAATSHALA</h1></Link>
            <Link className="login" to="/classroom">Login</Link>            
        </div>
    )
}

export default Header;
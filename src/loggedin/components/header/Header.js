import React from "react";
import './Header.css'
import logo from '../../../assets/logo.svg';
import {Link} from 'react-router-dom';
import { useLocalContext } from "./../../../classroom/context/context";

function Header() {

    const {        
        logout,
      } = useLocalContext();

    return(
        <div className="container">
            <div className="logo"><Link to="/"><img src={logo} alt="" /></Link></div>
            <Link className="title" to="/"><h1> PAATSHALA</h1></Link>
            <Link className="logout" onClick={() => logout()} to="/">logout</Link>
        </div>
    )
}

export default Header;  
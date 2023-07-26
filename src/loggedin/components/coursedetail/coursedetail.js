import React from "react";
import logo from '../../../assets/logo.svg';
import Header from './../header/Header'
import Navbar from './../navbar/Navbar'

function coursedetails() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Course Details</h1></div>
            <div className="box2">
                <div></div>
                <div className="mb5">
                    <a href="https://drive.google.com/file/d/1w-UNjky4Pq7QQDaxwNG3h4GPPK5lpW62/view" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>First Year</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1hL3oA_X3g9hI-cxdW9bE6x0_p86JqrFU/view" className="box5" target="_blank">
                        <div >
                        <div className="outerbox_image">
                            <img src={logo} className="box_image" alt=""/>
                        </div>
                            <h2>Second Year</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1u627lTEBlQ6XdAnXYA_3RQsclnugqIhv/view" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>Third Year</h2>
                        </div>
                    </a>  
                </div>
            </div>
         </div>
    )
}


export default coursedetails;
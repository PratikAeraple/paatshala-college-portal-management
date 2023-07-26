import React from "react";
import logo from '../../../assets/logo.svg';
import Header from './../header/Header'
import Navbar from './../navbar/Navbar'

function results() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Results</h1></div>
            <div className="box2">
                <div></div>
                <div className="mb5">
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>SEMISTER 1</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div >
                        <div className="outerbox_image">
                            <img src={logo} className="box_image" alt=""/>
                        </div>
                            <h2>SEMISTER 2</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>SEMISTER 3</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>SEMISTER 4</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>SEMISTER 5</h2>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1B5hzgqha6Vcro45KQceup6slqwmBM8B2/view?usp=sharing" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src={logo} className="box_image" alt=""/>
                            </div>
                            <h2>SEMISTER 6</h2>
                        </div>
                    </a>
                    
                    </div>
                    </div>
                    </div>
    )
}


export default results;
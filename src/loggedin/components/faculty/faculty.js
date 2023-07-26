import React from 'react'
import Navbar from './../navbar/Navbar'
import Header from './../../components/header/Header'
import logo from './../../../assets/logo.svg'
import './../box/box_faculty.css'
import Merina_maam from './../../../assets/merina_maam.png'
import Rohini_maam from './../../../assets/rohini_maam.png'
import Sneha_maam from './../../../assets/sneha_maam.png'
import Sumit_sir from './../../../assets/sumit_sir.png'

function attendance() {
    return (
        <div> 
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>faculty contact</h1></div>
            <div className="box2">
            <div className="mb5">
            <div className="mbteacher">
                
                    <a href="https://forms.gle/BVaHiYucJTBdBzRZ7" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={Sneha_maam} className="box_image" alt=""/>
                            </div>
                            <h2>Sneha Ma'am</h2>
                        </div>
                    </a>
                    <a href="https://forms.gle/cKhqVq22RUe3XxkY7" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={Rohini_maam} className="box_image" alt=""/>
                            </div>
                            <h2>Rohini Ma'am</h2>
                        </div>
                    </a>

            </div>
            <div className="mbteacher">
                    <a href="https://forms.gle/qTu4WdQJkijio23PA" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={Merina_maam} className="box_image" alt=""/>
                            </div>
                            <h2>Merina Ma'am</h2>
                        </div>
                    </a>
                    <a href="https://forms.gle/oD1s6E48X17NBeb47" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src={Sumit_sir} className="box_image" alt=""/>
                            </div>
                            <h2>Sumit Sir</h2>
                        </div>
                    </a>
            
            </div>
            </div>
            </div>

        </div>
        
    )
}

export default attendance

import React from "react";
import './Aboutus.styles.css';
import Header from './../../components/header/Header.components';
import Navbar from './../../components/navbar/Navbar.components';
import Footer from './../../components/Footer/Footer.components';
import Footerbottom from './../../components/FooterBottom/Footerbottom.components'; 

function Aboutus() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>About us</h1></div>
            <div >
               
               <div className="box2">
               <br></br>
               <h2>
                   Why PAATSHALA?
               </h2><br></br><br></br>
               <p>
               In our system students and teacher do not have to use multiple software to communicate with each other. 
                It will be an ease for students to access library and submit assignment. If a student can’t afford textbook, 
                there will be a portal where a student can view or download textbook. Students can Communicate easily 
                with teachers. Students can also get their results from our software, they don’t have to wait in the queue. 
                Teacher can Post assignment from the software. Teachers can have a quick access to any digital Library 
                book or in case he/she forgets to bring a textbook, the teacher can continue teaching with the free 
                digital book available on our website.
                Most important thing all of these things can be done form a single software.

                </p><br></br>
                <p>
                Our basic objective of this project is to build a bridge between students and teachers. 
                Student can easily maintain and view their assignments. Students can pay fees by online mode. 
                All the assignment and classwork can be maintained on a single platform.  
                </p><br></br>
                <p>
                Our main purpose of this project is to share information.  
                All the communication relevant tasks are done in short span of time and more effectively. 
                Since all the information is stored in a secured and systematic way, students and teachers can 
                access the libraries and textbooks any time. Every student and teacher will get an authorised and 
                encrypted unique id and password. Students can find flexibility to pay their academic fees through their dashboard.
                </p><br></br><br></br>

               </div>
            </div>
            <Footer />
            <Footerbottom />
        </div>
    )

}

export default Aboutus;
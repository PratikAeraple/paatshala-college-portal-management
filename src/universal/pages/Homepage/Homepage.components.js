import React from "react";
import './Homepage.styles.css';
import Header from './../../components/header/Header.components';
import Navbar from './../../components/navbar/Navbar.components';
import Footer from './../../components/Footer/Footer.components';
import Footerbottom from './../../components/FooterBottom/Footerbottom.components';

function HomePage() {
    return(
        <div >
            <Header />
            <Navbar />
           
            <div className="Main-header box"><h1>HomePage</h1></div>
            <div className="Academic-box">
                <h4 className="padding">From Director’s Desk</h4>
                <h2 className="padding">MRS. JYOTI GAITONDE</h2>
                <p className="padding">
                The mission of MVLU College college is to give exceptional progressive education to 
                undergraduate students, focusing on their intellectual growth as well as evolving as an 
                individual devoted to virtuous standards and their full involvement as leaders in society. 
                </p>
                <p className="padding">I am sure by pursuing these objectives with vision and integrity, 
                We can provide quality and value based education to the students.
                </p>
            </div>
            <div className="Academic-box">
                <h2 className="padding">Library</h2>
                <p className="padding">
                The Library has an excellent collection of about 60,000 text books, 
                reference books, journals, periodicals etc. Its facilities and services exist 
                for the benefit of its users; the whole academic community of staff and students 
                Library rules is devised to ensure the best service to the users.
                </p>
            </div>
            <div className="Academic-box">
                <h2 className="padding">IT (Information Technology) Lab</h2>
                <p className="padding">
                The IT lab are fully equipped with Modern Amities like latest high speed computers, 
                Internet, Wifi, Projectors etc. The lab gave a new dimension in the teaching and learning 
                methodologies. The lab fulfils Practice, Experience and Learn motive of the Department of 
                Information Technology.
                </p>
            </div>
            <div className="Academic-box">
                <h2 className="padding">Gymkhana</h2>
                <p className="padding">
                The College Gymkhana is managed by the Chairperson nominated by the Principal along 
                with the Sports Co-ordinator & student secretaries. The purpose of the Gymkhana is to 
                encourage students to participate in indoor & outdoor games as well as in intercollegiate 
                competitions. 
                </p>
                <p className="padding">The college has in house facilities for games such as Carom, 
                Chess, Table Tennis, Basketball, Football, Throw ball, Archery, Rifle & Pistol Shooting 
                and Swimming. The institution also provides coaching facilities in the Martial Arts like 
                Judo – Karate, as well as in Cricket Football and Hockey.
                </p>
            </div>
            <div className="Academic-box">
                <h2 className="padding">Auditorium & Conference Rooms</h2>
                <p className="padding">
                A well equipped Auditorium & Conference room is available for the seminars, meetings 
                and others programmes.
                </p>
            </div>
        

            <Footer />
            <Footerbottom />
        </div>
    )

}

export default HomePage;
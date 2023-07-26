import React from "react";
import './Academic.styles.css';
import Header from './../../components/header/Header.components';
import Navbar from './../../components/navbar/Navbar.components';
import Footer from './../../components/Footer/Footer.components';
import Footerbottom from './../../components/FooterBottom/Footerbottom.components';

function Academic() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Academic</h1></div>
            <div className="Academic-box">
                <h1 className="padding">Bsc Computer Science</h1>
                <h2 className="padding">Course Features</h2>
                <p className="padding">
                Computer Science is taught as a broad subject. We encourage you to develop your professional 
                competence as well as your intellectual adventure. We do not offer narrow training courses 
                restricted to IT or to the design of web pages although of course we do consider the theory 
                and practice of these topics within an engineering context. </p>
                <p className="padding">The ability to approach problems analytically, and to design structured solutions Throughout your course you will have the 
                opportunity to develop the ability to solve problems and produce effective solutions; 
                a skill well recognized and valued by employers. In each year of your degree, laboratory 
                modules will help you to develop skills of data analysis, design and implementation. 
                You will also be introduced to a wide range of modern software development tools and 
                techniques. Your projects will give you the opportunity to gain a thorough understanding 
                of the design and implementation process.
                </p>
            </div>
            <div className="Academic-box">
                <h1 className="padding">Bsc Information Technology</h1>
                <h2 className="padding">Course Features</h2>
                <p className="padding">B.Sc. I.T. is an integrated course of three years with six semesters. The focus of the 
                program is to initiate, integrate and innovate the technology to meet the current IT industry 
                needs. This course will emphasize students in application development, latest programming 
                language skills, focuses on providing a sound theoretical background as well as good practical 
                exposure to students in relevant areas. Information Technology program is a relatively new 
                entrant, when compared to other traditional B.Sc. programs. As the name suggests, this program 
                revolves around the field of Information Technology. B.Sc. IT course, on many fronts, is 
                similar to IT Engineering program also!
                </p>
                <p className="padding">
                After completion of the course, a candidate can enroll for a post-graduation degree of 
                two years duration, leading to a Master of science in Information Technology (IT.) degree, 
                M.C.A., M.B.A., M.M.S. (System) etc. These days, IT directly or indirectly influences many 
                areas of life, ranging from transportation to healthcare! So, in all these sectors, B.Sc. 
                IT graduates may find decent jobs! Also, using their skills, IT graduates may also start up 
                on their own. Programming, Web designing, Software designing etc are some skills, using which, 
                one may start one’s own venture/freelance service/consultation service.
                </p>
            </div>
            <div className="Academic-box">
                <h1 className="padding">BSc BioTechnology</h1>
                <h2 className="padding">Course Features</h2>
                <p className="padding">
                Biotechnology is one of the most revolutionary and beneficial scientific advances of 
                the last quarter century. It is an interdisciplinary science including not only biology 
                but also subjects like mathematics, physics, chemistry, engineering and many more. It is 
                also a conglomeration of various combined technologies applied to living cells for production 
                of a particular product or enhancing its quality according to our preferences.
                </p>
                <p className="padding">
                Its application varies from agriculture to industry – food, pharmaceutical, chemical, 
                bio-products, textiles, medicine, nutrition, environmental conservation, animal sciences etc., 
                all this makes it one of the fastest growing fields. Biotechnology combines disciplines like 
                genetics, molecular biology, biochemistry, embryology and cell biology, which are in turn 
                linked to practical disciplines like chemical engineering, information technology and robotics.
                </p>
                <p className="padding">
                    An individual aspiring for career in Biotechnology should have a scientific aptitude and a keen interest in the biological sciences. Some other aspects like problem solving skills, information technology skill, analyzing and interpreting skills are also essential for a successful career in this field.
                </p>
            </div>
            <div className="Academic-box">
                <h1 className="padding">Bachelor’s in Mass Media</h1>
                <h2 className="padding">Course Features</h2>
                <p className="padding">
                The University of Mumbai had deemed the Bachelor of Mass Media course as a Credit Based 
                Semester and Grading System with effect from the academic year 2011-12 for First Year, 
                2012-13 for Second Year and 2013-14 for Third Year. Keeping in mind the pertinent goal of 
                balancing theoretical knowledge with practical experience and exposure, the University of 
                Mumbai has now renamed BMM (Bachelor of Mass Media) to BAMMC (B.A in Multimedia and Mass 
                Communication) by changing its syllabus to more industry specific from the academic year 
                2019-20 onwards and the examinations will be a University adjudicated exam under the able 
                supervision of the respective colleges running the course of BAMMC.</p> 
                <p className="padding">BAMMC (B.A in Multimedia 
                and Mass Communication) is a 3 year degree course designed to prepare efficient, 
                competent and quality media professionals. It is a career oriented course that throws up 
                umpteen options at the end of three years. The quality education and training with the help 
                of modern teaching aids, equip students with required technology and understanding of media 
                to be able to work proficiently in the industry. The students are exposed to the field work 
                in media right from the beginning in the form of assignments and projects. All our 
                faculties are media professionals with wide-ranging experience of working in media 
                organizations. This course is divided in six semesters and conducted under the guidelines 
                and norms of University of Mumbai. The course promotes the freedom of thought & expression.</p>
                <p className="padding">We at MVLU, aspire to sell originality, creativity, dedication, willpower & ardour in our 
                media students. The MVLU BAMMC student/scholar could be knowledgeable in an in-depth study 
                of media, its powers, responsibility & for that reason recommended to excel so that students 
                could recognize the technique of making every voice heard, every image visible & each opinion 
                counted. We intend to conceive it through growing essential human talents of oral presentation, 
                lucid writing capabilities, important questioning, motivation & helping social shape. 
                </p>
            </div>
            <Footer />
            <Footerbottom />
        </div>
    )

}

export default Academic;
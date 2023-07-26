import React from "react";
import './library.css';
import Header from './../header/Header'
import Navbar from './../navbar/Navbar'

function library() {
    return(
        <div>
            <Header />
            <Navbar />
            <div className="Main-header box"><h1>Library</h1></div>
            <div className="box2">
                <div></div>
                <div className="mb5">
                    <a href="https://archive.org/details/houseofmirth0000whar_x9w7/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div >
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/12376780-L.jpg" className="box_image" alt=""/>
                            </div>
                            <h3></h3>
                        </div>
                    </a>
                    <a href="https://archive.org/details/dli.ministry.03219/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div >
                        <div className="outerbox_image">
                            <img src="https://covers.openlibrary.org/b/id/7196575-L.jpg" className="box_image" alt=""/>
                        </div>
                            <h3></h3>
                        </div>
                    </a>
                    <a href="https://archive.org/details/lifeofolaudahequ00equi_0/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/312718-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>Gustavus Vassa</h3> */}
                        </div>
                    </a>
                    <a href="https://archive.org/details/chancetaleintwop00conruoft/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/10628183-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>Chance</h3> */}
                        </div>
                    </a>  
                    <a href="https://archive.org/details/germinalzola190000zola/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/104252-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>Germinal</h3> */}
                        </div>
                    </a>
                    <a href="https://archive.org/details/heroidesxivedite00oviduoft/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/341046-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>Heroides</h3> */}
                        </div>
                    </a>
                    <a href="https://archive.org/details/poemschosenedite00tennuoft/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/587013-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>Alfred</h3> */}
                        </div>
                    </a>
                    <a href="https://archive.org/details/williammorristow1911cran/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/10677967-L.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>William Morris</h3> */}
                        </div>
                    </a>
                    <a href="https://archive.org/details/j.-r.-r.-tolkien-el-hobbit/mode/2up?ref=ol&view=theater" className="box5" target="_blank">
                        <div>
                            <div className="outerbox_image">
                                <img src="https://covers.openlibrary.org/b/id/8406786-M.jpg" className="box_image" alt=""/>
                            </div>
                            {/* <h3>The Hobbit</h3> */}
                        </div>
                    </a>
                    
                </div>
            </div>
         </div>
    )
}


export default library;
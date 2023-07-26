import React from 'react'
import {Switch, Route} from 'react-router-dom'
import coursedetail from "./../loggedin/components/coursedetail/coursedetail"
import feepayment from "./../loggedin/components/feepayment/feepayment"
import library from "./../loggedin/components/library/library"
import result from "./../loggedin/components/result/result"
import textbook from "./../loggedin/components/textbook/textbook"
import faculty from "./../loggedin/components/faculty/faculty"
import classroom from "./Classroomroute"
import HomePage from './../universal/pages/Homepage/Homepage.components';
import Academic from './../universal/pages/Academic/Academic.components';
import Contectus from './../universal/pages/ContaceUs/Contenctus.components';
import Event from './../universal/pages/Events/Events.components';
import Aboutus from './../universal/pages/Aboutus/Aboutus.components';


function navbarroute() {
    return (
        <div>
          <Switch>
          
          {/* LoggedIn Route */}
          <Route path="/coursedetail" component={coursedetail} />
          <Route path="/feepayment" component={feepayment} />
          <Route path="/library" component={library} />
          <Route path="/result" component={result} />
          <Route path="/textbook" component={textbook} />
          <Route path="/classroom" component={classroom} />
          <Route path="/facultycontact" component={faculty} />

          {/* Universal Route */}
          <Route exact path='/' component={HomePage} />
          <Route path='/Academic' component={Academic} />
          <Route path='/ContactUs' component={Contectus} />
          <Route path='/Event' component={Event} />
          <Route path='/AboutUs' component={Aboutus} />

          </Switch>
        </div>
    ) 
}

export default navbarroute

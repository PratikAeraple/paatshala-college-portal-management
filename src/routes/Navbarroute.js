import React from 'react'
import {Switch, Route} from 'react-router-dom'
import coursedetail from "./../loggedin/components/coursedetail/coursedetail"
import feepayment from "./../loggedin/components/feepayment/feepayment"
import library from "./../loggedin/components/library/library"
import result from "./../loggedin/components/result/result"
import textbook from "./../loggedin/components/textbook/textbook"

function navbarroute() {
    return (
        <div>
          <Switch>
          {/*admin navbar path routes*/}
          <Route path="/admin/coursedetail" component={coursedetail} />
          <Route path="/admin/feepayment" component={feepayment} />
          <Route path="/admin/library" component={library} />
          <Route path="/admin/result" component={result} />
          <Route path="/admin/textbook" component={textbook} />

          {/*student navbar path routes*/}
          <Route path="/student/coursedetail" component={coursedetail} />
          <Route path="/student/feepayment" component={feepayment} />
          <Route path="/student/library" component={library} />
          <Route path="/student/result" component={result} />
          <Route path="/student/textbook" component={textbook} />

          {/*teacher navbar path routes*/}
          <Route path="/teacher/coursedetail" component={coursedetail} />
          <Route path="/teacher/feepayment" component={feepayment} />
          <Route path="/teacher/library" component={library} />
          <Route path="/teacher/result" component={result} />
          <Route path="/teacher/textbook" component={textbook} />
          </Switch>
        </div>
    )
}

export default navbarroute

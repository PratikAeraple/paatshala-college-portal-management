import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./loggedin/components/header/Header";
import admin from "./loggedin/admin/admin"
import student from "./loggedin/student/student"
import teacher from "./loggedin/teacher/teacher"
import Navbarroute from './routes/Navbarroute'
import Classroomroute from './routes/Classroomroute'

function App() {
  return (
    <div className="App">

          <Header />
          
          <Switch>       
          <Route path="/student" component={student} />
          <Route path="/teacher" component={teacher} />
          <Route path="/admin" component={admin} />          
          </Switch>
          
          <Classroomroute />
          <Navbarroute />
        
    </div>
  );
}

export default App;

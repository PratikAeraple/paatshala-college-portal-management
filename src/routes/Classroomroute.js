import React, { useEffect, useState } from "react";
import { Drawer, JoinedClasses, Login, Main } from "./../classroom/components";
import { Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./../routes/Routes";
import { useLocalContext } from "./../classroom/context/context";
import db from "./../lib/firebase";


function Classroomroute() {
       
  
  const { loggedInMail } = useLocalContext();

  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);

  return (
    <div>
            <Switch>
            
              {createdClasses.map((item, index) => (
                <Route key={index} path={`/${item.id}`}>
                  <Drawer />
                  <Main classData={item} />
                </Route>
              ))}
              {joinedClasses.map((item, index) => (
                <Route key={index} path={`/${item.id}`}>
                  <Drawer />
                  <Main classData={item} />
                </Route>
              ))}
              <IsUserRedirect
                user={loggedInMail}
                loggedInPath="/student"
                path="/signin"
                exact
              >
                <Login />
              </IsUserRedirect>
  
              <ProtectedRoute user={loggedInMail} path="/classroom" exact>
                <Drawer />
                <ol className="joined">
                  {createdClasses.map((item) => (
                    <JoinedClasses classData={item} />
                  ))}
  
                  {joinedClasses.map((item) => (
                    <JoinedClasses classData={item} />
                  ))}
                </ol>
              </ProtectedRoute>
            </Switch>
        </div>
    )
}

export default Classroomroute

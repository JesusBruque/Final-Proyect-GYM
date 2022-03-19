import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//Views
import Home from "./views/Home/Home.jsx";
import Login from "./views/Login/Login.jsx";

//Layout
import Layout from "./Layout/Layout.jsx";
import BookPhysiotherapy from "./views/BookPhysiotherapy/BookPhysiotherapy.jsx";
import BookTraining from "./views/BookTraining/BookTraining.jsx";
import Appointments from "./views/Appointments/Appointments.jsx";
import WorkerAgenda from "./views/WorkerAgenda/WorkerAgenda.jsx";

//create your first component
const AppRouter = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/book-training">
                <BookTraining />
              </Route>
              <Route exact path="/book-physio">
                <BookPhysiotherapy />
              </Route>
              <Route exact path="/appointments">
                <Appointments />
              </Route>
              <Route exact path="/agenda">
                <WorkerAgenda />
              </Route>
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(AppRouter);

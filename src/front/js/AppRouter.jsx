import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//Views
import Home from "./views/Home/Home.jsx";
import Account from "./views/Account/Account.jsx";
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import Login from "./views/Login/Login.jsx";
import WorkerView from "./views/WorkerView/WorkerView.jsx";

//Layout
import Layout from "./Layout/Layout.jsx";

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
              <Route exact path="/register/customer">
                <UserRegister />
              </Route>
              <Route exact path="/login">
                <h1>Login</h1>
              </Route>
              <Route exact path="/register/trainer">
                <UserRegister />
              </Route>
              <Route exact path="/register/physio">
                <UserRegister />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/workerview">
                <WorkerView />
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

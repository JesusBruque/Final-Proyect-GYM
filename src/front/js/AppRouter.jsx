import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//Views
import Home from "./views/Home/Home.jsx";

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
              <Route exact path="/Admin-Pannel/Menu">
                <UserRegister />
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

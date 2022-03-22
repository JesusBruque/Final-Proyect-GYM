import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//Views
import Home from "./views/Home/Home.jsx";
import AdminPannelMenu from "./views/Admin-Pannel/Admin-Pannel-Menu.jsx";
import AdminPannelCustomers from "./views/Admin-Pannel/Admin-Pannel-Customers.jsx";
import AdminPannelTrainers from "./views/Admin-Pannel/Admin-Pannel-Trainers.jsx";
import AdminPannelPhysios from "./views/Admin-Pannel/Admin-Pannel-Physios.jsx";
import AdminPannelNotifications from "./views/Admin-Pannel/Admin-Pannel-Notifications.jsx";
import AdminPannelTimetable from "./views/Admin-Pannel/Admin-Pannel-Timetable.jsx";
import AdminPannelRegister from "./views/Admin-Pannel/Admin-Pannel-Register.jsx";
import Account from "./views/Account/Account.jsx";
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import Login from "./views/Login/Login.jsx";
import Appointments from "./views/Appointments/Appointments.jsx";
import BookTraining from "./views/BookTraining/BookTraining.jsx";
import BookPhysiotherapy from "./views/BookPhysiotherapy/BookPhysiotherapy.jsx";
import WorkerAgenda from "./views/WorkerAgenda/WorkerAgenda.jsx";

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
              <Route exact path="/admin/menu">
                <AdminPannelMenu />
              </Route>
              <Route exact path="/admin/customers">
                <AdminPannelCustomers />
              </Route>
              <Route exact path="/admin/trainers">
                <AdminPannelTrainers />
              </Route>
              <Route exact path="/admin/physios">
                <AdminPannelPhysios />
              </Route>
              <Route exact path="/admin/register">
                <AdminPannelRegister />
              </Route>
              <Route exact path="/admin/notifications">
                <AdminPannelNotifications />
              </Route>
              <Route exact path="/admin/timetable">
                <AdminPannelTimetable />
              </Route>
              <Route exact path="/register/customer">
                <UserRegister />
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
              <Route exact path="/1">
                <BookTraining />
              </Route>
              <Route exact path="/2">
                <BookPhysiotherapy />
              </Route>
              <Route exact path="/appointments">
                <Appointments />
              </Route>
              <Route exact path="/workeragenda">
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

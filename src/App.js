import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/header-footer/navbar";
import Footer from "./components/header-footer/footer";

//Page imports
import Aboutus from "./pages/about-us";
import Getsupport from "./pages/get-support";
import Howitworks from "./pages/how-it-works";
import SignupForm from "./components/login-signup/sign-up-form";
import LoginForm from "./components/login-signup/log-in-form";
import IncubatorDashboard from "./components/incubation/incubator/incubator-dashboard";
import StartupDashboard from "./components/incubation/startup/startup-dashboard";
import Details from "./components/incubation/startup/details/details";
import EditDetails from "./components/incubation/startup/details/edit-details";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Switch>
        {/*Main Routes here*/}
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={Aboutus} />
        <Route path='/get-support' exact component={Getsupport} />
        <Route path='/how-it-works' exact component={Howitworks} />
        <Route path='/login' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupForm} />

        {/* Test routes here */}
        <Route path='/incubator' exact component={IncubatorDashboard} />
        <Route path='/startup' exact component={StartupDashboard} />
        <Route path='/startup/edit' exact component={EditDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

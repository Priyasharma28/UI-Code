import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loader from "./containers/loader";
import Navbar from "./containers/Navbar";
import routes from "./routes";
import { connect } from 'react-redux';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/jquery/dist/jquery.min.js";

function App() {
  return (
    <div>
      <Loader />
      <Navbar />
        <Switch>
        {
          routes.map((route, i) => (
              <Route key={i} {...route} />
          ))
        }
        </Switch>
    </div>
  );
}

export default connect()(App)

import React from "react";
import { Provider } from 'react-redux';
import store from "../../store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "../../pages/AdminPanel";
import Main from "../Main";
import NoMatch from "../../pages/NoMatchPage";

export default () => (
  <Provider store={store}>
    <Router basename="/catalog-spa">
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/admin-panel">
              <AdminPanel />
          </Route>
          <Route>
              <NoMatch />
          </Route>
      </Switch>
    </Router>
  </Provider>
);
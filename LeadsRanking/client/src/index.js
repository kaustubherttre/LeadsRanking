
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import RuleEngineApp from "./views/RuleEngine/App/RuleEngineApp";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducers.jsx";

import config from "config";
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const hist = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
        <Switch>
          <Route exact path="/" render={props => <RuleEngineApp {...props} />} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import terms from "./components/terms";
import privacy from "./components/privacy";
import Home from "./Home/Home";
import history from './components/history';
import Marketplace from "./marketplace/Marketplace";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={withRouter(Home)} />
                    <Route path="/components/terms" exact component={terms} />
                    <Route path="/components/privacy" exact component={privacy} />
                    <Route path="/components/marketplace/Marketplace" exact component={withRouter(Marketplace)} />
                </Switch>
            </Router>
        )
    }
}
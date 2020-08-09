import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import CatalogPage from "../../pages/CatalogPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import NoMatch from "../../pages/NoMatchPage";

export default function Main() {
    return (
        <Switch>
            <Route exact path="/">
                <CatalogPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    );
}


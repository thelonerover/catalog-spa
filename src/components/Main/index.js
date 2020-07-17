import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import CatalogPage from "../CatalogPage";
import RegisterPage from "../RegisterPage";
import LoginPage from "../LoginPage";
import NoMatch from "../NoMatch";

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


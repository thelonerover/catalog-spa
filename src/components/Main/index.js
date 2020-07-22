import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import createServer from "../../helpers/server";

import CatalogPage from "../../pages/CatalogPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import NoMatch from "../../pages/NoMatchPage";

createServer();

//server testing
// fetch("/users")
// .then(res => res.json())
// .then(users => {
//     console.log(users)
// });

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


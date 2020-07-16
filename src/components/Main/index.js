import React from "react";
import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

export default function Main() {
    return (
        <Main>
            <Switch>
                <Route path="/">
                    <Catalog />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/log-in">
                    <LogIn />
                </Route>
            </Switch>
        </Main>
    );
}


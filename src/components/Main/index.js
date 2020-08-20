import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Switch, Route, Link } from "react-router-dom";

import CatalogPage from "../../pages/CatalogPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import NoMatch from "../../pages/NoMatchPage";

export default function Main() {
    return (
        <div className="main">
            <Container>
                <Menu>
                    <Menu.Item
                        name="catalog"
                    >
                        <Link to="/">Catalog</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="login"
                    >
                        <Link to="login">Login</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="register"
                    >
                        <Link to="register">Register</Link>
                    </Menu.Item>
                </Menu>
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
            </Container>
        </div>
    );
}


import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Switch, Route, Link, Modal } from "react-router-dom";

import CatalogPage from "../../pages/CatalogPage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import CreateProductPage from "../../pages/CreateProductPage";
import NoMatch from "../../pages/NoMatchPage";

import LoginModal from "../LoginModal";
import RegistrationModal from "../RegistrationModal";

export default function Main() {
    return (
        <Container>
            <Menu>
                <Menu.Item name="catalog">
                    <Link to="/">Catalog</Link>
                </Menu.Item>
                <Menu.Item name="add-product">
                    <Link to="add-product">Add product</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name="login">
                        <LoginModal />
                    </Menu.Item>
                    <Menu.Item name="registration">
                        <RegistrationModal />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        <Switch>
            <Route exact path="/">
                <CatalogPage />
            </Route>
            <Route path="/register">
                <RegistrationPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route>
                <CreateProductPage path="/add-product" />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
        </Container>
    );
}


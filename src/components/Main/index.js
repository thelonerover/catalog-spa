import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import CatalogPage from "../../pages/CatalogPage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import CreateProductPage from "../../pages/CreateProductPage";
import NoMatch from "../../pages/NoMatchPage";
import LoginModal from "../LoginModal";
import RegistrationModal from "../RegistrationModal";

export default function Main() {
    const user = useSelector(state => state.user);

    return (
        <Container>
            <Menu>
                <Menu.Item name="catalog">
                    <Link to="/">Catalog</Link>
                </Menu.Item>
                {user.userType === "A" &&
                <Menu.Item name="add-product">
                    <Link to="add-product">Add product</Link>
                </Menu.Item>}
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
            {user.userType === "A" &&
            <Route>
                <CreateProductPage path="/add-product" />
            </Route>}
            <Route>
                <NoMatch />
            </Route>
        </Switch>
        </Container>
    );
}


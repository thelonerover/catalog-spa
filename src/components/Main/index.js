import React from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

import MainMenu from "../MainMenu";
import CatalogPage from "../../pages/CatalogPage";

export default () => {
    return (
        <Container>
            <MainMenu />
            <Switch>
                <Route exact path="/">
                    <CatalogPage />
                </Route>
            </Switch>
        </Container>
    );
}


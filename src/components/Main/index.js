import React from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

import MainMenu from "../MainMenu";
import CataloguePage from "../../pages/CataloguePage";

export default () => {
    return (
        <Container>
            <MainMenu />
            <Switch>
                <Route exact path="/">
                    <CataloguePage />
                </Route>
            </Switch>
        </Container>
    );
}


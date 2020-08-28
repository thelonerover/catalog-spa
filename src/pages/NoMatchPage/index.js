import React from "react";
import { Container } from "semantic-ui-react";
import MainMenu from "../../components/MainMenu";

export default function NoMatch() {
    return (
        <Container>
            <MainMenu />
            <p>404</p>
        </Container>
    );
}
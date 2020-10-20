
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Catalog from "../../components/Catalog";

export default () => {
    return (
        <Container>
            <Header as="h1">Catalog</Header>
            <Catalog />
        </Container>
    );
}
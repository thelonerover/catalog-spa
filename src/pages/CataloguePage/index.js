
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Catalogue from "../../components/Catalogue";

export default () => {
    return (
        <Container>
            <Header as="h1">Catalog</Header>
            <Catalogue />
        </Container>
    );
}
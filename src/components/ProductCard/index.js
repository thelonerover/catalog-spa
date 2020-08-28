import React from "react";
import { Card } from "semantic-ui-react";

export default (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Description>{props.description}</Card.Description>
            <span>{props.price}</span>
        </Card.Content>
    </Card>
);
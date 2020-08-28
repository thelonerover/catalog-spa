import React from "react";
import { Card, Image } from "semantic-ui-react";

export default (props) => (
    <Card>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Description>{props.description}</Card.Description>
            <span>{props.price}</span>
        </Card.Content>
    </Card>
);
import React from "react";
import { Card, Image } from "semantic-ui-react";

export default (props) => {
    const date = new Date(props.creationDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    return (<Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Created on {formattedDate}</span>
            </Card.Meta>
            <Card.Description>{props.description}</Card.Description>
            <span>Price: {props.price}</span>
        </Card.Content>
    </Card>);
};
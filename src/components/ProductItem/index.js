import React from "react";
import { Item } from "semantic-ui-react";

export default (props) => (
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
            {props.description}
        </Item.Description>
        <span>{props.price}</span>
      </Item.Content>
    </Item>
);
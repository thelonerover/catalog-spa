import React from "react";
import { Item, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, getProductPagesNumber, deleteProduct } from "../../store/actions/productsActions";


export default (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleDelete = id => e => {
    dispatch(deleteProduct(id));
    dispatch(getProductsRequest(products.page));
    dispatch(getProductPagesNumber(12));
  }

  return (
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
            {props.description}
        </Item.Description>
        <span>{props.price}</span>
        <Item.Extra>
          <Button basic color="red" floated="right" onClick={handleDelete(props.id)}>Delete</Button>
          <Button color="blue" floated="right">Edit</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
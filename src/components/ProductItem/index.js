import React from "react";
import { Item, Button, Modal } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, deleteProduct } from "../../store/actions/productsActions";
import ProductEditingModal from "../ProductEditingModal";


export default (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const date = new Date(props.creationDate);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const handleDelete = id => e => {
    dispatch(deleteProduct(id));
    dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
  }

  return (
    <Item>
      <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content> 
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>
            <span className='date'>Created on {formattedDate}</span>
        </Item.Meta>
        <Item.Description>
            {props.description}
        </Item.Description>
        <span>{props.price}</span>
        <Item.Extra>
          <Button basic color="red" floated="right" onClick={handleDelete(props.id)}>Delete</Button>
          <ProductEditingModal product={props} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
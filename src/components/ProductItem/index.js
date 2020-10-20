import React from "react";
import { Item, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, deleteProduct, showEditingModal, setCurrentProduct } from "../../store/actions/productsActions";


export default props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const date = new Date(props.creationDate);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const handleDelete = id => () => {
    dispatch(deleteProduct(id));
    dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
  }

  const handleEditModal = productData => () => {
    dispatch(showEditingModal());
    dispatch(setCurrentProduct(productData));
  }

  return (
    <Item>
      <Item.Content> 
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>
            <span className="date">Created on {formattedDate}</span>
        </Item.Meta>
        <Item.Description>
            {props.description}
        </Item.Description>
        <span>{props.price}</span>
        <Item.Extra>
          <Button basic floated="right" color="red" onClick={handleDelete(props.id)}>Delete</Button>
          <Button primary floated="right" onClick={handleEditModal(props)}>Edit</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
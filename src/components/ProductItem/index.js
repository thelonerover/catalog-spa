import React, { useState } from "react";
import { Item, Button, Modal, Header,  } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, deleteProduct } from "../../store/actions/productsActions";
import ProductEditingModal from "../ProductEditingModal";


export default (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const date = new Date(props.creationDate);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const [open, setOpen] = useState(false);

  const confirmationModal = () => (
    <Modal
      trigger={<Button>Show Modal</Button>}
      header="Are you sure?"
      actions={["No", { key: "yes", content: "Yes", positive: true }]}
    />
  );

  const handleDelete = id => e => {
    dispatch(deleteProduct(id));
    dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
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
          <Button basic color="red" floated="right" onClick={handleDelete(props.id)}>Delete</Button>
          <ProductEditingModal product={props} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
import React, { useState } from "react";
import { Item, Button, Modal } from "semantic-ui-react";
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
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
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
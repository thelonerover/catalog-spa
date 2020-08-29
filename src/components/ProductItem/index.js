import React from "react";
import { Item, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, getProductPagesNumber, deleteProduct } from "../../store/actions/productsActions";
import ProductEditingModal from "../ProductEditingModal";


export default ({ product }) => {
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
        <Item.Header as="a">{product.name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
            {product.description}
        </Item.Description>
        <span>{product.price}</span>
        <Item.Extra>
          <Button basic color="red" floated="right" onClick={handleDelete(product.id)}>Delete</Button>
          <ProductEditingModal product={product} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
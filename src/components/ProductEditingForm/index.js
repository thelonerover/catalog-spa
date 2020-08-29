import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, TextArea } from "semantic-ui-react";
import { updateProduct, setErrorMessage, setCurrentStatus, getProductsRequest, getProductPagesNumber } from "../../store/actions/productsActions";
import productStatuses from "../../constants/productStatuses";

export default ({ product }) => {
    const [formState, setFormState] = useState({});
    const [productProperties, setProductProperties] = useState({id: product.id,  name: product.name, description: product.description, price: product.price });
    const initialFormErrors = {name: false};
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => () => {
        resetErrors();
    }, []);

    useEffect(() => {
        switch(products.currentStatus) {
            case productStatuses.updateRequest:
                setFormState({loading: true});
                break;
            case productStatuses.updateSuccess:
                setFormState({success: true});
                break;
            case productStatuses.updateFailure:
                setFormState({error: true});
                break;
            default:
                break;
        }
    }, [product.currentStatus]);

    const handleChangeProductProperties = fieldName => e => {
        e.preventDefault();
        setProductProperties({...productProperties, [fieldName]: e.target.value});
    }

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(updateProduct(productProperties));
        dispatch(getProductsRequest(products.page));
        dispatch(getProductPagesNumber(12));
      }

    const resetErrors = () => {
        setFormState({});
        setFormErrors({...initialFormErrors});
        dispatch(setErrorMessage(""));
        dispatch(setCurrentStatus(""));
    }
    
    
    return (
        <Form method="post" action="/products" {...formState}>
            <Form.Field
                type="text"
                control={Input}
                name="name"
                label="Name"
                placeholder="Name"
                onChange={handleChangeProductProperties("name")}
                value={productProperties.name}
            />
            <Form.Field
                control={TextArea}
                name="description"
                label="Description"
                placeholder="Description"
                onChange={handleChangeProductProperties("description")}
                value={productProperties.description}
            />
            <Form.Field
                type="number"
                control={Input}
                name="price"
                label="Price"
                placeholder="Price"
                onChange={handleChangeProductProperties("price")}
                value={productProperties.price}
            />
            <Input type="submit" name="submit" onClick={handleUpdate} value="Add product" />
        </Form>
    );
}
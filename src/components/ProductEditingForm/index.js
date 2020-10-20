import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, TextArea, Message, Button } from "semantic-ui-react";
import { updateProduct, setErrorMessage, setCurrentStatus, getProductsRequest, closeEditingModal } from "../../store/actions/productsActions";

export default product => {
    const [formState, setFormState] = useState({});
    const [productProperties, setProductProperties] = useState({id: product.id,  name: product.name, description: product.description, price: product.price });
    const initialFormErrors = {name: false};
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => () => {
        resetErrors();
    }, []);

    const resetErrors = () => {
        setFormState({});
        setFormErrors({...initialFormErrors});
        dispatch(setErrorMessage(""));
        dispatch(setCurrentStatus(""));
    }

    const handleChangeProductProperties = fieldName => e => {
        e.preventDefault();
        setProductProperties({...productProperties, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setErrorMessage(""));
        setFormState({});

        let errors = {...initialFormErrors};
        if(!productProperties.name) {
            errors.name = { content: "Please enter a valid name!", pointing: "below" };
        }
        setFormErrors(errors);

        if(productProperties.name) {
            resetErrors();
            dispatch(updateProduct(productProperties));
            dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
        }

        dispatch(closeEditingModal());
    }

    const handleClose = () => {
        dispatch(closeEditingModal());
    }
    
    return (
        <Form method="post" action="/products" {...formState} onSubmit={e => {e.preventDefault()}}>
            <Form.Field
                type="text"
                control={Input}
                name="name"
                label="Name"
                placeholder="Name"
                onChange={handleChangeProductProperties("name")}
                value={productProperties.name}
                error={formErrors.name}
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
            <Button primary name="update" onClick={handleSubmit}>Save changes</Button>
            <Button secondary onClick={handleClose}>Cancel</Button>
            {formState.error && 
            <Message
                compact
                {...formState}
                header={products.error}
            />}
        </Form>
    );
}
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, TextArea, Message, Button } from "semantic-ui-react";
import { addProduct, getProductsRequest } from "../../store/actions/productsActions";

export default () => {
    const [formState, setFormState] = useState({});
    const [productProperties, setProductProperties] = useState({name: "", description: "", price: 0 });
    const initialFormErrors = {name: false};
    const products = useSelector(state => state.products);
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const dispatch = useDispatch();

    useEffect(() => () => {
        resetErrors();
    }, []);

    const resetErrors = () => {
        setFormState({});
        setFormErrors({...initialFormErrors});
    }

    const handleChangeProductProperties = fieldName => e => {
        e.preventDefault();
        setProductProperties({...productProperties, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormState({});

        let errors = {...initialFormErrors};
        if(!productProperties.name) {
            errors.name = { content: "Please enter a valid name!", pointing: "below" };
        }
        setFormErrors(errors);

        if(productProperties.name) {
            resetErrors();
            dispatch(addProduct(productProperties));
            dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
        }
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
            <Button color="blue" name="update" onClick={handleSubmit}>Add product</Button>
            {formState.error && 
            <Message
                compact
                {...formState}
                header={products.error}
            />}
        </Form>
    );
}
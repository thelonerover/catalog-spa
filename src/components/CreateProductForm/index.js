import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Form, TextArea } from "semantic-ui-react";
import { addProduct } from "../../store/actions/productsActions";

export default () => {
    const [formState, setFormState] = useState({});
    // const initialFormErrors = {name: false};
    const [productProperties, setProductProperties] = useState({ 
        name: "",
        description: "",
        price: 0
     });
    const dispatch = useDispatch();

    // useEffect(() => () => {
    //     resetErrors();
    // }, []);

    // useEffect(() => {
    //     switch(user.currentStatus) {
    //         case productStatuses.getRequest:
    //             setFormState({loading: true});
    //             break;
    //         case productStatuses.getSuccess:
    //             setFormState({success: true});
    //             break;
    //         case productStatuses.getFailure:
    //             setFormState({error: true});
    //             break;
    //         default:
    //             break;
    //     }
    // }, [user.currentStatus]);

    const handleChangeProductProperties = fieldName => e => {
        e.preventDefault();
        setProductProperties({...productProperties, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProduct(productProperties));
    }
    
    return (
        <div>
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
                <Input type="submit" name="submit" onClick={handleSubmit} value="Add product" />
            </Form>
        </div>
    );
}
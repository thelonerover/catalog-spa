import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Form } from "semantic-ui-react";
import { addProduct } from "../../actions/productsActions";

export default function CreateProductForm() {
    const [productProperties, setProductProperties] = useState({ 
        name: "",
        description: "",
        price: 0
     });
    const dispatch = useDispatch();

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
            <Form method="post" action="/products">
                <label>
                    <Input type="text" name="name" onChange={handleChangeProductProperties("name")} value={productProperties.name} placeholder="Name" />
                    <Input type="text" name="description" onChange={handleChangeProductProperties("description")} value={productProperties.description} placeholder="Description" />
                    <Input type="number" name="price" onChange={handleChangeProductProperties("price")} value={productProperties.price} placeholder="Price" />
                    <Input type="submit" name="submit" onClick={handleSubmit} value="Add product" />
                </label>
            </Form>
        </div>
    );
}
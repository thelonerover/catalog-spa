import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, Message, Button } from "semantic-ui-react";

export default () => {
    const [parameters, setParameters] = useState({ name: "", price: "" });
    const [formState, setFormState] = useState({});
    const dispatch = useDispatch();

    const handleChangeFilters = fieldName => e => {
        e.preventDefault();
        setParameters({...parameters, [fieldName]: e.target.value});
    }

    const handleFilter = e => {
        e.preventDefault();
        // dispatch();
    }
    
    return (
        <Form method="post" action="/login" {...formState} onSubmit={e => {e.preventDefault()}}> 
            <Form.Field
                type="name"
                control={Input}
                label="Product name"
                placeholder="Product name"
                // onChange={handleChangeFilters()}
                value={parameters.name}
            />
             <Form.Field
                type="number"
                control={Input}
                label="Price"
                placeholder="Price"
                // onChange={handleChangeFilters()}
                value={parameters.name}
            />
            <Button type="submit" name="submit" onClick={handleFilter}>Apply filter</Button>
        </Form>
    );
}
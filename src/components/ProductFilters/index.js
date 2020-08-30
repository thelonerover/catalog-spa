import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Header } from "semantic-ui-react";
import { setProductFilters, getProductsRequest } from "../../store/actions/productsActions";

export default () => {
    const [filters, setFilters] = useState({ name: "", priceFrom: "", priceTo: "" });
    const [formState, setFormState] = useState({});
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => () => {
        dispatch(setProductFilters({}));
    }, []);

    const handleValueChange = fieldName => e => {
        e.preventDefault();
        setFilters({...filters, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setProductFilters(filters));
        dispatch(getProductsRequest({ page: products.page, filters }));
    }
    
    return (
        <Form method="post" action="/login" {...formState} onSubmit={e => {e.preventDefault()}}> 
            <Header
                as="h3"
                content="Product filters"
            />
            <Form.Field
                type="name"
                control={Input}
                label="Product name"
                placeholder="Product name"
                onChange={handleValueChange("name")}
                value={filters.name}
            />
            <Form.Group widths="equal">
                <Form.Field
                    fluid
                    type="number"
                    control={Input}
                    placeholder="Price from"
                    onChange={handleValueChange("priceFrom")}
                    value={filters.priceFrom}
                />
                <Form.Field
                fluid
                    type="number"
                    control={Input}
                    placeholder="to"
                    onChange={handleValueChange("priceTo")}
                    value={filters.priceTo}
                />
            </Form.Group>
            <Button type="submit" name="submit" onClick={handleSubmit}>Apply filter</Button>
        </Form>
    );
}
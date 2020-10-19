import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Header } from "semantic-ui-react";
import { setQueryParams, getProductsRequest, setProductsPage } from "../../store/actions/productsActions";

export default () => {
    const [filters, setFilters] = useState({name: "", priceFrom: "", priceTo: ""});
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const isInitialMount = useRef(true);

    useEffect(() => () => {
        dispatch(setQueryParams({}));
    }, []);

    useEffect(() => {
        isInitialMount.current ? isInitialMount.current = false : dispatch(setQueryParams(filters));
    }, [filters]);  
    
    const handleValueChange = fieldName => e => {
        e.preventDefault();
        setFilters({...filters, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setProductsPage(1));
        dispatch(getProductsRequest({page: 1, queryParams: products.queryParams}));
    }
    
    return (
        <Form method="post" action="/login" onSubmit={e => {e.preventDefault()}}> 
            <Header
                as="h3"
                content="Product filters"
            />
            <Form.Field
                type="name"
                control={Input}
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
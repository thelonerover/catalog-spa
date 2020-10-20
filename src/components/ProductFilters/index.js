import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Header } from "semantic-ui-react";
import { setQueryParams, getProductsRequest } from "../../store/actions/productsActions";
import productActionTypes from "../../store/actionTypes/productActionTypes";

export default () => {
    const [filters, setFilters] = useState({name: "", priceFrom: "", priceTo: ""});
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const isInitialMount = useRef(true);
    const [catalogueLoading, setCatalogueLoading] = useState(true);

    useEffect(() => () => {
        dispatch(setQueryParams({}));
    }, []);

    useEffect(() => {
        isInitialMount.current ? isInitialMount.current = false : dispatch(setQueryParams(filters));
    }, [filters]);  
    
    useEffect(() => {
        switch(products.currentAction) {
            case productActionTypes.getProductsRequest:
                setCatalogueLoading(true);
                break;
            case productActionTypes.getProductsSuccess:
                setCatalogueLoading(false);
                break;
            default:
                break;
        }
    }, [products.currentAction]);
    
    const handleValueChange = fieldName => e => {
        e.preventDefault();
        setFilters({...filters, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
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
                disabled={catalogueLoading}
            />
            <Form.Group widths="equal">
                <Form.Field
                    fluid
                    type="number"
                    control={Input}
                    placeholder="Price from"
                    onChange={handleValueChange("priceFrom")}
                    value={filters.priceFrom}
                    disabled={catalogueLoading}
                />
                <Form.Field
                    fluid
                    type="number"
                    control={Input}
                    placeholder="to"
                    onChange={handleValueChange("priceTo")}
                    value={filters.priceTo}
                    disabled={catalogueLoading}
                />
            </Form.Group>
            <Button type="submit" secondary name="submit" onClick={handleSubmit} loading={catalogueLoading}>Show products</Button>
        </Form>
    );
}
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Pagination, Dimmer, Loader } from "semantic-ui-react";
import { getProductsRequest, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import productActionTypes from "../../store/actionTypes/productActionTypes";
import ProductCard from "../ProductCard";
import ProductFilters from "../ProductFilters";
import SortBy from "../SortBy";

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [itemsLoading, setItemsLoading] = useState(true);

    useEffect(() => () => dispatch(resetProducts()), []);

    useEffect(() => {
        dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
    }, [products.page]);

    useEffect(() => {
        switch(products.currentAction) {
            case productActionTypes.getProductsRequest:
                setItemsLoading(true);
                break;
            case productActionTypes.getProductsSuccess:
                setItemsLoading(false);
                break;
            default:
                break;
        }
    }, [products.currentAction]);   

    const handlePaginationChange = (e, { activePage }) => {
        dispatch(setProductsPage(activePage));
    };

    return (
        <Container>
            <Grid columns={2}>
                <Grid.Column width={4}>
                    <ProductFilters />
                </Grid.Column>
                <Grid.Column width={12}>
                    <SortBy />
                    <Grid relaxed>
                        {itemsLoading && 
                        <Dimmer active inverted>
                            <Loader inverted content="Loading products" />
                        </Dimmer>}
                        {products.items.map(product => (
                            <Grid.Column width={4} key={product.id}>
                                <ProductCard {...product} />
                            </Grid.Column>
                        ))}
                        <Grid.Row>
                            <Grid.Column>
                                <Pagination 
                                    defaultActivePage={1}
                                    activePage={products.activePage}
                                    totalPages={products.pagesNumber} 
                                    onPageChange={handlePaginationChange} 
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </Container>
    );
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Pagination } from "semantic-ui-react";
import { getProductsRequest, getProductPagesNumber, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import ProductCard from "../ProductCard";
import ProductFilters from "../ProductFilters";
import SortBy from "../SortBy";

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProductsRequest({page: 1}));
        dispatch(getProductPagesNumber(8));
        return () => dispatch(resetProducts());
    }, []);


    const handlePaginationChange = (e, { activePage }) => {
        dispatch(getProductsRequest({page: activePage}));
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
                        {products.items.map(product => (
                            <Grid.Column width={4} key={product.id}>
                                <ProductCard {...product} />
                            </Grid.Column>
                        ))}
                        <Grid.Row>
                            <Grid.Column>
                                <Pagination defaultActivePage={1} totalPages={products.pagesNumber} onPageChange={handlePaginationChange} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </Container>
    );
}
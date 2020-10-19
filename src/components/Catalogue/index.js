import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Pagination, Dimmer, Loader } from "semantic-ui-react";
import { getProductsRequest, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import ProductCard from "../ProductCard";
import ProductFilters from "../ProductFilters";
import SortBy from "../SortBy";

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [catalogState, setCatalogueState] = useState({});

    useEffect(() => () => dispatch(resetProducts()), []);

    useEffect(() => {
        dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
    }, [products.page]);

    // useEffect(() => {
    //     switch(products.currentStatus) {
    //         case productActionTypes.getProductsRequest:
    //             setCatalogueState({loading: true});
    //             break;
    //         case productActionTypes.getProductsSuccess:
    //             setCatalogueState({loading: false});
    //             break;
    //         default:
    //             break;
    //     }
    // }, [products.currentStatus]);   

    const handlePaginationChange = (e, { activePage }) => {
        dispatch(setProductsPage(activePage));
    };

    return (
        <Container> 
            {catalogState.loading ? 
            <Loader inverted content='Loading' />
            : 
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
            </Grid>}

        </Container>
    );
}
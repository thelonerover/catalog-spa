import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Pagination } from "semantic-ui-react";
import { getProductsRequest, getProductPagesNumber, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import ProductCard from "../ProductCard";

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProductsRequest(1));
        dispatch(getProductPagesNumber(12));
        return () => dispatch(resetProducts());
    }, []);


    const handlePaginationChange = (e, { activePage }) => {
        dispatch(getProductsRequest(activePage));
        dispatch(setProductsPage(activePage));
    };

    return (
        <Container> 
            <Grid columns={4} relaxed padded="vertically">
                {products.items.map(product => (
                    <Grid.Column key={product.id}>
                        <ProductCard {...product} />
                    </Grid.Column>
                ))}
            </Grid>
            <Pagination defaultActivePage={1} totalPages={products.pagesNumber} onPageChange={handlePaginationChange} />
        </Container>
    );
}
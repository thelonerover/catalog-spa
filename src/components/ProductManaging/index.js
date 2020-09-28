import React, { useEffect } from "react";
import { Grid, Pagination, Item } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import ProductItem from "../ProductItem";
 
export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => () => dispatch(resetProducts()), []);

    useEffect(() => {
        dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
    }, [products.page]);


    const handlePaginationChange = (e, { activePage }) => {
        dispatch(setProductsPage(activePage));
    };

    return (
        <Grid columns={1} relaxed padded="vertically">
            <Grid.Row>
                <Grid.Column>
                    <Item.Group divided>
                        {products.items.map(product => (
                            <ProductItem key={product.id} {...product} />
                        ))}
                    </Item.Group>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Pagination defaultActivePage={1} totalPages={products.pagesNumber} onPageChange={handlePaginationChange} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
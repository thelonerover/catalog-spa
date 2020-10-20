import React, { useEffect, useState } from "react";
import { Grid, Pagination, Item, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import productActionTypes from "../../store/actionTypes/productActionTypes";
import ProductItem from "../ProductItem";
 
export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [itemsLoading, setItemsLoading] = useState(true);

    useEffect(() => () => dispatch(resetProducts()), []);

    useEffect(() => {
        dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
    }, [products.page]);

    useEffect(() => {
        switch(products.currentStatus) {
            case productActionTypes.getProductsRequest:
                setItemsLoading(true);
                break;
            case productActionTypes.getProductsSuccess:
                setItemsLoading(false);
                break;
            default:
                break;
        }
    }, [products.currentStatus]); 

    const handlePaginationChange = (e, { activePage }) => {
        dispatch(setProductsPage(activePage));
    };

    return (
            <Grid columns={1} relaxed padded="vertically">
                <Grid.Row>
                    {itemsLoading && 
                    <Dimmer active inverted>
                        <Loader inverted content="Loading products" />
                    </Dimmer>}
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
                        <Pagination 
                            defaultActivePage={1}
                            activePage={products.activePage}
                            totalPages={products.pagesNumber} 
                            onPageChange={handlePaginationChange} 
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    );
}
import React, { useEffect } from "react";
import { Grid, Pagination, Item } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest, getProductPagesNumber, setProductsPage, resetProducts } from "../../store/actions/productsActions";
import ProductItem from "../ProductItem";
 
export default function ManageProducts() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => { 
        dispatch(getProductsRequest(1));
        dispatch(getProductPagesNumber(10));
        return () => dispatch(resetProducts());
    }, []);


    const handlePaginationChange = (e, { activePage }) => {
        dispatch(getProductsRequest(activePage));
        dispatch(setProductsPage(activePage));
    };

    return (
        <div>
            <Item.Group divided>
                {products.items.map(product => (
                    <ProductItem {...product} />
                ))}
            </Item.Group>
            <Pagination defaultActivePage={1} totalPages={products.pagesNumber} onPageChange={handlePaginationChange} />
        </div>
    );
}
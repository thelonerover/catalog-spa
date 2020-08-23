import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Card, Pagination } from "semantic-ui-react";
import { getProducts, getProductPagesNumber, setProductsPage } from "../../store/actions/productsActions";

export default function Catalog() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => { 
        dispatch(getProducts(products.page));
        dispatch(getProductPagesNumber(12));
    }, []);


    const handlePaginationChange = (e, { activePage }) => {
        dispatch(getProducts(activePage));
        dispatch(setProductsPage(activePage));
    };
    
    return (
        <Container> 
            <Grid columns={4} relaxed>
                {products.items.map(product => (
                    <Grid.Column key={product.id}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Description>{product.description}</Card.Description>
                                <span>{product.price}</span>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid>
           
            <Pagination defaultActivePage={products.page} totalPages={products.pagesNumber} onPageChange={handlePaginationChange} />
        </Container>
    );
}
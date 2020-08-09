import React, { useState, useEffect } from "react";
import { Container, Grid, Card, Image, Pagination } from "semantic-ui-react";

export default function Catalog({ products, pagesNumber, getProductsPage, getProductPagesNumber }) {
    const [page, setPage] = useState(1); //temporary
    const [pages, setPages] = useState(1);

    useEffect(() => { 
        getProductsPage(page);
        getProductPagesNumber();
    }, []);

    console.log(products);

    return (
        <Container className="catalog">
            <Grid columns={4} relaxed>
                {/* {products.map(product => (
                    <Grid.Column key={product.id}>
                        <Card className="card">
                            <Image></Image>
                            <Card.Content>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Description>{product.description}</Card.Description>
                                <span className="price">{product.price}</span>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))} */}
            </Grid>
            <Pagination defaultActivePage={page} totalPages={pages} />
        </Container>
    );
}
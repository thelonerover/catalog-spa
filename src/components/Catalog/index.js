import React, { useState, useEffect } from "react";

export default function Catalog({ products, getProductsPage }) {
    const [page, setPage] = useState(1);

    useEffect(() => { 
        getProductsPage(page);
     }, []);

    return (
        <div className="catalog">
            {products.map(product => (
                <div className="card" key={product.id}>
                    <span className="name">{product.name}</span>
                    <span className="description">{product.description}</span>
                    <span className="price">{product.price}</span>
                </div>)
            )}
        </div>
    );
}
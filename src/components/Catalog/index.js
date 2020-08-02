import React, { useEffect } from "react";

export default function Catalog({ products, getProducts }) {

    useEffect(() => { 
        getProducts();
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
import React from "react";

export default function({ products }) {
    returtn (
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
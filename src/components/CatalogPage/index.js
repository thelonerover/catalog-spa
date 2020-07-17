
import React from "react";
import { Link } from "react-router-dom";

export default function CatalogPage() {
    return (
        <div>
            <p>Catalog Page</p>
            <Link to="login">Login</Link>&nbsp;/&nbsp;<Link to="register">Register</Link>
            <br/>
            <Link to="/">Catalog</Link>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import Catalog from "../../containers/CatalogContainer";

export default function CatalogPage() {
    return (
        <div>
            <Catalog />
            <Link to="login">Login</Link>&nbsp;/&nbsp;<Link to="register">Register</Link>
            <br/>
            <Link to="/">Catalog</Link>
        </div>
    );
}
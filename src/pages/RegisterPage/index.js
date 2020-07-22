
import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div>
            <form method="post" action="/logIn">
                <label>
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm password" />
                    <input type="submit" value="Register" />
                </label>
            </form>
            <Link to="/">Catalog</Link>
        </div>
    );
}
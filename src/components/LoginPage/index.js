import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div>
            <form method="post" action="/logIn">
                <label>
                    <input type="text" placeholder="Login" />
                    <input type="text" placeholder="Password" />
                    <input type="submit" value="Log In" />
                </label>
            </form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
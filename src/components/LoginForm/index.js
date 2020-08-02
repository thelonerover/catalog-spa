import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
    };

    return (
        <div>
            <form method="post" action="/users">
                <label>
                    <input type="text" name="name" onChange={e => { handleInput(e, e.target.value, setEmail) }} value={email} placeholder="Login" />
                    <input type="text" name="password" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                    <input type="submit" name="loginSubmit" onClick={e => { 
                        e.preventDefault();
                        handleSubmit(email, password);
                    }} value="Log In" />
                </label>
            </form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
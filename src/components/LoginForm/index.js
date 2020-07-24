import React, { useState }  from "react";
import { Link } from "react-router-dom";

export default function LoginPage({ handleSubmit }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
    };

    return (
        <div>
            <form method="post" action="/users">
                <label>
                    <input type="text" name="name" onChange={e => { handleInput(e, e.target.value, setLogin) }} value={login} placeholder="Login" />
                    <input type="text" name="password" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                    <input type="submit" name="submit" onClick={e => { 
                        e.preventDefault();
                        handleSubmit(login, password);
                     }} value="Log In" />
                </label>
            </form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
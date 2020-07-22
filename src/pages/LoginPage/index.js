import React, { useState }  from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
    };

    const handleSubmit = e => { 
        e.preventDefault();

        fetch("/users", { method: "POST" } )
        .then(res => res.json())
        .then(res => {
            if (res.user.login === login && res.user.password === password) {
                console.log("Auth succeed");
            } else {
                console.log("Auth failed");
            }
        });
    };

    return (
        <div>
            <form method="post" action="/logIn">
                <label>
                    <input type="text" name="name" onChange={e => { handleInput(e, e.target.value, setLogin) }} value={login} placeholder="Login" />
                    <input type="text" name="password" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                    <input type="submit" name="submit" onClick={e => { handleSubmit(e) }} value="Log In" />
                </label>
            </form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
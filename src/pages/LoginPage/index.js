import React, { useState }  from "react";
import { Link } from "react-router-dom";

const user = {
    email: "admin.gmail.com",
    password: "123123"
}

export default function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
     };
    const handleSubmit = e => { 
        e.preventDefault();
        fakeAuthRequest({login, password});
     };

     const fakeAuthRequest = data => {
        //  setTimeout(() => {
            if (data.login === login && data.password === password) {
                return true;
            }
            return false;
        //  }, 1000);
    }

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
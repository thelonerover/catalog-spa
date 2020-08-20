import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Label, Form } from "semantic-ui-react";

const loginUrl = "http://localhost:3000/login";

export default function LoginForm({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => {  
        e.preventDefault(); 
        setter(value);
    };

    return (
        <div>
            <Form method="post" action="/login">
                <label>
                    <Input type="text" name="name" onChange={e => { handleInput(e, e.target.value, setEmail) }} value={email} placeholder="Login" />
                    <Input type="text" name="password" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                    <Input type="submit" name="loginSubmit" onClick={e => { 
                        e.preventDefault();
                        handleSubmit(loginUrl, email, password);
                    }} value="Log In" />
                </label>
            </Form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
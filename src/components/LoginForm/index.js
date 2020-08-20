import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form } from "semantic-ui-react";
import { login } from "../../actions/userActions";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(credentials));
    }
    
    return (
        <div>
            <Form method="post" action="/login">
                <label>
                    <Input type="text" name="name" onChange={handleChangeCredentials("email")} value={credentials.email} placeholder="Login" />
                    <Input type="text" name="password" onChange={handleChangeCredentials("password")} value={credentials.password} placeholder="Password" />
                    <Input type="submit" name="loginSubmit" onClick={handleSubmit} value="Log In" />
                </label>
            </Form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}
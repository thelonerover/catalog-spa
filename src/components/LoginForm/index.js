import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form } from "semantic-ui-react";
import { login, logout } from "../../store/actions/userActions";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleLogin = e => {
        e.preventDefault();
        dispatch(login(credentials));
    }
    
    const handleLogout = e => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        user.isLoggedIn  ?
        <div>
            <span>{`You are logged in as ${user.email}`}</span>
            <Form action="logout" onSubmit={e => {e.preventDefault()}}>
                <Input type="submit" onClick={handleLogout} value="Log out" />
            </Form>
        </div> : 
        <div>
            <Form method="post" action="/login" onSubmit={e => {e.preventDefault()}}> 
                <Form.Field
                    type="email"
                    control={Input}
                    label="E-mail"
                    placeholder="E-mail"
                    onChange={handleChangeCredentials("email")}
                    value={credentials.email}
                />
                <Form.Field
                    type="password"
                    control={Input}
                    label="Password"
                    placeholder="Password"
                    onChange={handleChangeCredentials("password")}
                    value={credentials.password}
                />
                <Input type="submit" name="submit" onClick={handleLogin} value="Log In" />
            </Form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}

// error={{
//     content: "Please enter a valid email address",
//     pointing: "below",
// }}
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form, Message } from "semantic-ui-react";
import { login, logout } from "../../store/actions/userActions";
import userStatuses from "../../store/constants/userStatuses";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const user = useSelector(state => state.user);
    const [formState, setFormState] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        switch(user.currentStatus) {
            case userStatuses.loginRequest:
                setFormState({loading: true});
                break;
            case userStatuses.loginSuccess:
                setFormState({success: true});
                break;
            case userStatuses.loginFailure:
                setFormState({error: true});
                break;
            default:
                break;
        }
    }, [user.currentStatus]);

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
        user.isLoggedIn ?
        <div>
            <Form action="logout" {...formState} onSubmit={e => {e.preventDefault()}}>
                {formState.success  && 
                <Message
                    {...formState}
                    header={`${user.currentStatus} as ${user.email}`}
                />}
                <Input type="submit" onClick={handleLogout} value="Log out" />
            </Form>
        </div> : 
        <div>
            <Form method="post" action="/login" {...formState} onSubmit={e => {e.preventDefault()}}> 
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
            {formState.error && 
            <Message
                {...formState}
                header={user.error}
            />}
        </div>
    );
}
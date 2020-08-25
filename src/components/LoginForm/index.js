import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form, Message } from "semantic-ui-react";
import { login, logout, setErrorMessage, setCurrentStatus } from "../../store/actions/userActions";
import userStatuses from "../../store/constants/userStatuses";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const user = useSelector(state => state.user);
    const [formState, setFormState] = useState({});
    const dispatch = useDispatch();

    useEffect(() => () => {
        resetErrors();
    }, []);

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
        dispatch(setErrorMessage(""));
        setFormState({});

        if(!credentials.email) {
            setEmailError({ content: "Please enter a valid email address!", pointing: "below" });
        }
        if(!credentials.password) {
            setPasswordError({ content: "Please enter a valid password!", pointing: "below" });
        }
        if(credentials.email && credentials.password) {
            resetErrors();
            dispatch(login(credentials));
        }
    }
    
    const handleLogout = e => {
        e.preventDefault();
        dispatch(logout());
    }

    const resetErrors = () => {
        setEmailError(false);
        setPasswordError(false);
        setFormState({});
        dispatch(setErrorMessage(""));
        dispatch(setCurrentStatus(""));
    }
    
    console.log(formState);
    return (
        user.isLoggedIn ?
        <div>
            <Form action="logout" {...formState} onSubmit={e => {e.preventDefault()}}>
                {user.isLoggedIn  && 
                <Message
                    header={`Logged in as ${user.email}`}
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
                    error={emailError}
                />
                <Form.Field
                    type="password"
                    control={Input}
                    label="Password"
                    placeholder="Password"
                    onChange={handleChangeCredentials("password")}
                    value={credentials.password}
                    error={passwordError}
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
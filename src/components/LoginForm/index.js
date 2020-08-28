import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, Message } from "semantic-ui-react";
import { login, logout, setErrorMessage, setCurrentStatus } from "../../store/actions/userActions";
import userStatuses from "../../constants/userStatuses";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: "admin@example.com", password: "123" });
    const initialFormErrors = {email: false, password: false};
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
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

        let errors = {...initialFormErrors};
        if(!credentials.email) {
            errors.email = { content: "Please enter a valid email address!", pointing: "below" };
        }
        if(!credentials.password) {
            errors.password = { content: "Please enter a valid password!", pointing: "below" };
        }
        setFormErrors(errors);
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
        setFormState({});
        setFormErrors({...initialFormErrors});
        dispatch(setErrorMessage(""));
        dispatch(setCurrentStatus(""));
    }
    
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
                    label={{ icon: "asterisk" }}
                    value={credentials.email}
                    error={formErrors.email}
                />
                <Form.Field
                    type="password"
                    control={Input}
                    label="Password"
                    placeholder="Password"
                    onChange={handleChangeCredentials("password")}
                    label={{ icon: "asterisk" }}
                    value={credentials.password}
                    error={formErrors.password}
                />
                <Input type="submit" name="submit" onClick={handleLogin} value="Log In" />
            </Form>
            {formState.error && 
            <Message
                compact
                {...formState}
                header={user.error}
            />}
        </div>
    );
}
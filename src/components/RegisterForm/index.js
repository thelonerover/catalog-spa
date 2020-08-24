import React, { useState, useEffect }  from "react";
import { Input, Form, Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { registration, setErrorMessage } from "../../store/actions/userActions";

export default function RegisterForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "", passwordConfirmation: "" });
    const [formState, setFormState] = useState({});
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.isLoggedIn) {
            setFormState({success: true});
        }
    }, [user.isLoggedIn]);

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        console.log(formState);
        if (credentials.password === credentials.passwordConfirmation) {
            dispatch(registration(credentials));
            // setFormState({loading: true});
        } else {
            setFormState({error: true});
            dispatch(setErrorMessage("Passwords do not match"));
        }
    }

    return (
        <Form method="post" {...formState} action="/users" onSubmit={e => {e.preventDefault()}}>
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
            <Form.Field
                type="password"
                control={Input}
                label="Confirm password"
                placeholder="Confirm password"
                onChange={handleChangeCredentials("passwordConfirmation")}
                value={credentials.passwordConfirmation}
            />
            <Input type="submit" name="submit" onClick={handleSubmit} value="Register" />
            {user.error && 
            <Message
                {...formState}
                header={user.error}
            />}
        </Form>
    );
}
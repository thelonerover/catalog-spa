import React, { useState }  from "react";
import { Input, Form, Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { registration } from "../../store/actions/userActions";

export default function RegisterForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "", passwordConfirmation: "" });
    const message = useSelector(store => store.user.message)
    const dispatch = useDispatch();

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (credentials.password === credentials.passwordConfirmation) {
            dispatch(registration(credentials));
        }
    }

    return (
        <Form method="post" action="/users" onSubmit={e => {e.preventDefault()}}>
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
            <Message
                error
                header="Registration failed"
                content={message}
            />
            <Input type="submit" name="submit" onClick={handleSubmit} value="Register" />
        </Form>
    );
}
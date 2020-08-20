import React, { useState }  from "react";
import { Input, Form } from "semantic-ui-react";


export default function RegisterForm({ onSubmit }) {
    const [credentials, setCredentials] = useState({ email: "", password: "", spasswordConfirmation: "" });

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        //temporary
        if (credentials.password === credentials.passwordConfirmation) {
            onSubmit(credentials);
        } else {
            throw("Passwords do not match");
        }
    }

    return (
        <Form method="post" action="/users" onSubmit={e => {e.preventDefault()}}>
            <label>
                <Input type="email" onChange={handleChangeCredentials("email")} value={credentials.email} placeholder="E-mail" />
                <Input type="text" onChange={handleChangeCredentials("password")} value={credentials.password} placeholder="Password" />
                <Input type="text" onChange={handleChangeCredentials("spasswordConfirmation")} value={credentials.passwordConfirmation} placeholder="Confirm password" />
                <Input type="submit" name="registerSubmit" onClick={handleSubmit} value="Register" />
            </label>
        </Form>
    );
}
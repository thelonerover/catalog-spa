import React, { useState }  from "react";
import { Input, Label, Form } from "semantic-ui-react";

const usersUrl = "http://localhost:3000/users";

export default function RegisterForm({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
    };

    return (
        <Form method="post" action="/users">
            <label>
                <Input type="email" onChange={e => { handleInput(e, e.target.value, setEmail) }} value={email} placeholder="E-mail" />
                <Input type="text" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                <Input type="text" onChange={e => { handleInput(e, e.target.value, setPasswordConfirmation) }} value={passwordConfirmation} placeholder="Confirm password" />
                <Input type="submit" name="registerSubmit" onClick={e => { 
                    e.preventDefault();
                    if (password === passwordConfirmation) {
                        handleSubmit(usersUrl, email, password);
                    } else {
                        throw("Passwords do not match");
                    }
                }} value="Register" />
            </label>
        </Form>
    );
}
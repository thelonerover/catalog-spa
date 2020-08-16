import React, { useState }  from "react";

export default function RegisterPage({ handleSubmit }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleInput = (e, value, setter) => { 
        e.preventDefault(); 
        setter(value);
    };

    return (
        <form method="post" action="/register">
            <label>
                <input type="email" onChange={e => { handleInput(e, e.target.value, setLogin) }} value={login} placeholder="E-mail" />
                <input type="text" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                <input type="text" onChange={e => { handleInput(e, e.target.value, setPasswordConfirmation) }} value={passwordConfirmation} placeholder="Confirm password" />
                <input type="submit" name="registerSubmit" onClick={e => { 
                    e.preventDefault();
                    handleSubmit(login, password, passwordConfirmation);
                }} value="Rrgister" />
            </label>
        </form>
    );
}
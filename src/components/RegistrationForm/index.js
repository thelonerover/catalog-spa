import React, { useState, useEffect }  from "react";
import { Input, Form, Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { registration, setErrorMessage, setCurrentStatus } from "../../store/actions/userActions";
import userStatuses from "../../store/constants/userStatuses";

export default function RegistrationForm() {
    const [credentials, setCredentials] = useState({ email: "", password: "", passwordConfirmation: "" });
    const [formState, setFormState] = useState({});
    const initialFormErrors = {email: false, password: false, passwordConfirmation: false}
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    useEffect(() => () => {
        resetErrors();
    }, []);

    useEffect(() => {
        switch(user.currentStatus) {
            case userStatuses.registrationRequest:
                setFormState({loading: true});
                break;
            case userStatuses.registrationFailure:
                setFormState({error: true});
                break;
            case userStatuses.registrationSuccess:
                setFormState({success: true});
                break;
            default:
                break;
        }
    }, [user.currentStatus]);

    const handleChangeCredentials = fieldName => e => {
        e.preventDefault();
        setCredentials({...credentials, [fieldName]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        let errors = {...initialFormErrors};
        if(!credentials.email) {
            errors.email = { content: "Please enter a valid email address!", pointing: "below" };
        }
        if(!credentials.password) {
            errors.password = { content: "Please enter a valid password!", pointing: "below" };
        }
        if(!credentials.passwordConfirmation) {
            errors.passwordConfirmation = { content: "Please enter a valid password confirmation!", pointing: "below" };
        }
        setFormErrors(errors);
        
        if (credentials.email && 
            credentials.password && 
            credentials.passwordConfirmation && 
            credentials.password === credentials.passwordConfirmation) {
                resetErrors();
                dispatch(registration(credentials));
        } else {
            setFormState({error: true});
            dispatch(setErrorMessage("Passwords do not match"));
        }
    }

    const resetErrors = () => {
        setFormState({});
        setFormErrors({...initialFormErrors});
        dispatch(setErrorMessage(""));
        dispatch(setCurrentStatus(""));
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
                error={formErrors.email}
            />
            <Form.Field
                type="password"
                control={Input}
                label="Password"
                placeholder="Password"
                onChange={handleChangeCredentials("password")}
                value={credentials.password}
                error={formErrors.password}
            />
            <Form.Field
                type="password"
                control={Input}
                label="Confirm password"
                placeholder="Confirm password"
                onChange={handleChangeCredentials("passwordConfirmation")}
                value={credentials.passwordConfirmation}
                error={formErrors.passwordConfirmation}
            />
            <Input type="submit" name="submit" onClick={handleSubmit} value="Register" />
            {formState.error && 
            <Message
                {...formState}
                header={user.error}
            />}
            {formState.success  && 
            <Message
                {...formState}
                header={user.currentStatus}
            />}
        </Form>
    );
}
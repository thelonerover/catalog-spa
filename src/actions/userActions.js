import actionTypes from "../constants/userActionTypes";

export const login = (url, email, password) => {
    return async function(dispatch) {
        dispatch(loginRequest(email, password));

        let request = await fetch(url, { 
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email,
                password
            })
        });
        let response = await request.json();

        if (response.isLogged) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure("Wrong username or password."));
        }
    }
}

export const loginRequest = (email, password) => {
    return {
        type: actionTypes.loginRequest,
        email,
        password
    }
}

export const loginSuccess = () => {
    return {
        type: actionTypes.loginSuccess
    }
}

export const loginFailure = ()=> {
    return {
        type: actionTypes.loginFailure
    }
}

export const registration = (url, email, password) => {
    return async function(dispatch) {
        dispatch(registrationRequest(email, password));

        const requestOptions = {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email,
                password
            }),
        }

        let request = await fetch(url, requestOptions);
        let response = await request.json();

        if (response.errorCode === 1) {
            dispatch(registrationFailure("This email is unavailable!"));
        } else {
            dispatch(registrationSuccess());
        }
    }
}

export const registrationRequest = (email, password) => {
    return {
        type: actionTypes.registrationRequest,
        email,
        password
    }
}

export const registrationSuccess = () => {
    return {
        type: actionTypes.registrationSuccess
    }
}

export const registrationFailure = ()=> {
    return {
        type: actionTypes.registrationFailure
    }
}

export const logout = () => {
    return {
        type: actionTypes.logout
    }
}
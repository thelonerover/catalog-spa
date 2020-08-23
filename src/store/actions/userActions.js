import actionTypes from "../constants/userActionTypes";

export const login = credentials => {
    return async function(dispatch) {
        dispatch(loginRequest(credentials));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        }

        let request = await fetch("http://localhost:3000/login", requestOptions);

        if (request.ok) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure());
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

export const loginSuccess = () => ({type: actionTypes.loginSuccess});

export const loginFailure = ()=> ({ type: actionTypes.loginFailure });

export const registration = credentials => {
    return async function(dispatch) {
        dispatch(registrationRequest(credentials));

        const requestOptions = {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
                type: "C"
            }),
        }

        let request = await fetch("http://localhost:3000/users", requestOptions);
        let response = await request.json();

        if (response.errorCode === 1) {
            dispatch(registrationFailure("This email is unavailable!"));
        } else {
            dispatch(registrationSuccess());
        }
    }
}

export const registrationRequest = credentials => {
    return {
        type: actionTypes.registrationRequest,
        email: credentials.email,
        password: credentials.password
    }
}

export const registrationSuccess = () => ({ type: actionTypes.registrationSuccess });

export const registrationFailure = ()=> ({ type: actionTypes.registrationFailure });

export const logout = () => ({ type: actionTypes.logout });

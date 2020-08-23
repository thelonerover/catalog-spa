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

        let request;
        try {
            request = await fetch("http://localhost:3000/login", requestOptions);

            if (request.ok) {
                dispatch(loginSuccess(credentials.email));
            } else {
                dispatch(loginFailure());
            }
        } catch(error) {
            console.log(error);
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

export const loginSuccess = email => ({
    type: actionTypes.loginSuccess,
    email
});

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

        let request;
        try {
            request = await fetch("http://localhost:3000/users", requestOptions);
            let response = await request.json();

            if (response.errorCode === 1) {
                dispatch(registrationFailure(response.error));
            } else {
                dispatch(registrationSuccess());
            }
        } catch (error) {
            console.log(error);
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

export const registrationFailure = error=> ({ 
    type: actionTypes.registrationFailure,
    error
});

export const logout = () => ({ type: actionTypes.logout });

export const setErrorMessage = error => {
    return {
        type: actionTypes.setErrorMessage,
        error
    }
}

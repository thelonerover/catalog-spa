import actionTypes from "../actionTypes/userActionTypes";

export const login = credentials => async dispatch => {
    dispatch(loginRequest(credentials));

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        })
    }

    let response;
    try {
        response = await fetch("https://thelonerover.github.io/catalog-spa/login", requestOptions);
        let body = await response.json();

        if (response.ok) {
            dispatch(loginSuccess(body.email, body.type));
        } else {
            dispatch(loginFailure(body.error));
        }
    } catch(error) {
        console.error(error);
    }
}


export const loginRequest = (email, password) => ({
        type: actionTypes.loginRequest,
        email,
        password
});


export const loginSuccess = (email, userType) => ({
    type: actionTypes.loginSuccess,
    email,
    userType
});

export const loginFailure = error => ({ 
    type: actionTypes.loginFailure,
    error
});

export const registration = credentials => async dispatch => {
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

    let response;
    try {
        response = await fetch("https://thelonerover.github.io/catalog-spa/users", requestOptions);
        let body = await response.json();

        if (response.ok) {
            dispatch(registrationSuccess());
        } else {
            dispatch(registrationFailure(body.error));
        }
    } catch (error) {
        console.log(error);
    }
}


export const registrationRequest = credentials => ({
        type: actionTypes.registrationRequest,
        email: credentials.email,
        password: credentials.password
});


export const registrationSuccess = () => ({ type: actionTypes.registrationSuccess });

export const registrationFailure = error=> ({ 
    type: actionTypes.registrationFailure,
    error
});

export const logout = () => ({ type: actionTypes.logout });

export const setErrorMessage = error => ({
    type: actionTypes.setErrorMessage,
    error
});

export const setCurrentStatus = status => ({
    type: actionTypes.setCurrentStatus,
    status
});

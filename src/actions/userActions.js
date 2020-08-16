import actionTypes from "../constants/userActionTypes";

export const login = (url, email, password) => {
    return dispatch => {
        dispatch(loginRequest(email, password));
        
        return fetch(url, { method: "POST" })
            .then(response => response.json())
            .then(response => {
                if (response.email === email && response.password === password) {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFailure("Wrong username or password."));
                }
            });
    }
}

export const loginRequest = (loginStatus, email, password) => {
    return {
        type: actionTypes.loginRequest,
        loginStatus,
        email,
        password
    }
}

export const loginSuccess = loginStatus => {
    return {
        type: actionTypes.loginSuccess,
        loginStatus
    }
}

export const loginFailure = (loginStatus, errorMessage) => {
    return {
        type: actionTypes.loginFailure,
        errorMessage,
        loginStatus
    }
}

export const logout = loginStatus => {
    return {
        type: actionTypes.logout,
        loginStatus
    }
}
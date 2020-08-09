import actionTypes from "../constants/userActionTypes";

export const loginRequest = (email, password) => {
    return dispatch => {
        dispatch((loginStatus => {
            return {
                type: actionTypes.loginRequest,
                loginStatus
            }
        })());

        return fetch("http://localhost:3000/users/login", { method: "POST" })
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

export const loginSuccess = loginStatus => {
    return {
        type: actionTypes.loginSuccess,
        loginStatus
    }
}

export const loginFailure = (errorMessage, loginStatus) => {
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
import actionTypes from "../constants/userActionTypes";

export const loginRequest = (login, password) => {
    return dispatch => {
        dispatch({ type: actionTypes.loginRequest });
        return fetch("http://localhost:3000/users", { method: "POST" })
            .then(response => response.json())
            .then(response => {
                if (response.login === login && response.password === password) {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFailure("Wrong username or password."));
                }
            });
    }
}

export const loginSuccess = () => {
    return {
        type: actionTypes.loginSuccess,
    }
}

export const loginFailure = errorMessage => {
    return {
        type: actionTypes.loginFailure,
        errorMessage
    }
}

export const logout = () => {
    return {
        type: actionTypes.logout
    }
}
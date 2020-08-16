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
            })
            .catch(e => { console.log(e); });
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

export const registerRequest = (email, password) => {
    return {
        type: actionTypes.registerRequest,
        email,
        password
    }
}

export const registerSuccess = () => {
    return {
        type: actionTypes.registerSuccess
    }
}

export const registerFailure = ()=> {
    return {
        type: actionTypes.registerFailure
    }
}

export const logout = () => {
    return {
        type: actionTypes.logout
    }
}
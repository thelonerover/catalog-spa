import actionTypes from "../constants/userActionTypes";

export const loginRequest = (login, password) => {
    return dispatch => {
        return fetch("http://localhost:3000/users", { method: "POST" })
        .then(response => response.json()
        .then(dispatch({
            type: actionTypes.loginRequest,
            login,
            password
        })));
    }
}


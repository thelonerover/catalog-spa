import actionTypes from "../constants/userActionTypes";

export const login = (email, password) => {
    return async function(dispatch) {
        dispatch(loginRequest(email, password));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        }

        let request = await fetch("http://localhost:3000/login", requestOptions);
        let response = await request.json();

        if (response.ok) {
            dispatch(loginSuccess(response.userType));
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

export const loginSuccess = userType => {
    return {
        type: actionTypes.loginSuccess,
        userType
    }
}

export const loginFailure = ()=> {
    return {
        type: actionTypes.loginFailure
    }
}

export const registration = (email, password) => {
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

        let request = await fetch("http://localhost:3000/users", requestOptions);
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

export const registrationSuccess = () => ({ type: actionTypes.registrationSuccess });

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
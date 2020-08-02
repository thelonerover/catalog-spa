import actionTypes from "../constants/userActionTypes";

const loginStatuses = {
    loggingIn: "Logging in",
    loggedIn: "Logged in",
    notLoggedIn: "Not logged in",
    loginFailed: "Login attempt failed!"
}

const initialState = {
    isLoggedIn: false,
    loggingStatus: loginStatuses.notLoggedIn
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return {
                ...state, 
                loggingStatus: loginStatuses.loggingIn
            };

        case actionTypes.loginSuccess: 
            localStorage.setItem("email", action.email);
            localStorage.setItem("password", action.password);
            return {
                ...state, 
                isLoggedIn: true,
                loggingStatus: loginStatuses.loggedIn
            };

        case actionTypes.loginFailure: 
            return {
                ...state,
                loggingStatus: loginStatuses.loginFailed
            };

        case actionTypes.logout: 
            return {
                ...state,
                 isLoggedIn: false,
                 loggingStatus: loginStatuses.notLoggedIn
            };

        default: 
            return state;
    }
}

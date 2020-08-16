import actionTypes from "../constants/userActionTypes";
import loginStatuses from "../constants/loginStatuses";

const initialState = {
    isLoggedIn: false,
    email: "",
    password: "",
    loggingStatus: loginStatuses.notLoggedIn
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return {
                ...state, 
                loggingStatus: action.loggedIn,
                email: action.email,
                password: action.password
            };

        case actionTypes.loginSuccess: 
            localStorage.setItem("email", action.email);
            localStorage.setItem("password", action.password);

            return {
                ...state, 
                isLoggedIn: true,
                loggingStatus: action.loggedIn
            };

        case actionTypes.loginFailure: 
            return {
                ...state,
                loggingStatus: action.loginFailed
            };

        case actionTypes.logout: 
            return {
                ...state,
                 isLoggedIn: false,
                 loggingStatus: action.notLoggedIn
            };

        default: 
            return state;
    }
}

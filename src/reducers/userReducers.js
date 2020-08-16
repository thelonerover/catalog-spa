import actionTypes from "../constants/userActionTypes";
import userStatuses from "../constants/userStatuses";

const initialState = {
    isLoggedIn: false,
    curentStatus: userStatuses.notLoggedIn
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.loginRequest:
            return {
                ...state, 
                curentStatus: userStatuses.loggingIn
            };

        case actionTypes.loginSuccess: 
            localStorage.setItem("email", action.email);
            localStorage.setItem("password", action.password);

            return {
                ...state, 
                isLoggedIn: true,
                curentStatus: userStatuses.loggedIn
            };

        case actionTypes.loginFailure: 
            return {
                ...state,
                curentStatus: userStatuses.loginFailed
            };

        case actionTypes.registerRequest:
            return {
                ...state,
                curentStatus: userStatuses.registerRequest
            };

        case actionTypes.registerSuccess: 
            return {
                ...state, 
                isLoggedIn: true,
                curentStatus: userStatuses.registerSuccess
            };

        case actionTypes.registerFailure: 
            return {
                ...state,
                curentStatus: userStatuses.registerFailed
            };

        case actionTypes.logout: 
            return {
                ...state,
                isLoggedIn: false,
                curentStatus: userStatuses.notLoggedIn
            };

        default: 
            return state;
    }
}
